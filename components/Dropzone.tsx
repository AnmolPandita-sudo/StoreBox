/* eslint-disable react/no-unescaped-entities */
"use client";
import { db, storage } from "@/firebase";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import DropzoneComponent from "react-dropzone";
import toast from "react-hot-toast";

function Dropzone() {
  const [loading, setLoading] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();

  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading was failed");

      reader.onload = async () => {
        await uploadPost(file);
      };
      reader.readAsArrayBuffer(file);
    });
  };
  const uploadPost = async (selectedFile: File) => {
    if (loading) return;
    if (!user) return;

    setLoading(true);
    const toastId = toast.loading("Uploading...");

    let fileType = selectedFile.type;
    // check for some file type which i was facing issue not displaying its file type correctly
    if (
      fileType ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      fileType = "application/docx";
    } else if (
      fileType ===
      "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    ) {
      fileType = "application/ppt";
    } else if (
      fileType ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      fileType = "application/xlsx";
    }

    const docRef = await addDoc(collection(db, "users", user.id, "files"), {
      userId: user.id,
      fileName: selectedFile.name,
      fullName: user.fullName,
      profileImg: user.imageUrl,
      timestamp: serverTimestamp(),
      type: fileType,
      size: selectedFile.size,
    });

    const imageRef = ref(storage, `users/${user.id}/files/${docRef.id}`);

    uploadBytes(imageRef, selectedFile).then(async (snapshot) => {
      const downloadURL = await getDownloadURL(imageRef);

      await updateDoc(doc(db, "users", user.id, "files", docRef.id), {
        downloadURL: downloadURL,
      });
    });
    toast.success("Uploaded!!!", {
      id: toastId,
      duration: 3000,
      className: "dark:bg-slate-700 dark:text-white",
      icon: "🚀",
    });
    setLoading(false);
  };
  const maxSize = 20971520;
  return (
    <DropzoneComponent minSize={0} maxSize={maxSize} onDrop={onDrop}>
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        fileRejections,
        isDragReject,
      }) => {
        const isFileTooLarge =
          fileRejections.length > 0 && fileRejections[0].file.size > maxSize;
        return (
          <section className="m-4 cursor-pointer">
            <div
              {...getRootProps()}
              className={cn(
                "w-full h-52 flex justify-center items-center p-5 border border-dashed rounded-xl text-center",
                isDragActive
                  ? "bg-[#5a7ebd] text-4xl text-white animate-pulse font-playfair-display"
                  : "bg-[#96bea4] dark:bg-slate-800/80 md:text-4xl text-xl font-dancing-script"
              )}
            >
              <input {...getInputProps()} />
              {!isDragActive && "Click and/or drop a file to upload!"}
              {isDragActive && !isDragReject && "Drop the file to upload"}
              {isDragReject && "File not accepted, Sorry!"}
              {isFileTooLarge && "File is too large...."}
            </div>
          </section>
        );
      }}
    </DropzoneComponent>
  );
}

export default Dropzone;
