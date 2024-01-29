import { auth } from "@clerk/nextjs";
import Dropzone from "@/components/Dropzone";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { FileType } from "@/typings";
import TableWrapper from "@/components/table/TableWrapper";

async function Dashboard() {
  const { userId } = auth();

  const docsResults = await getDocs(collection(db, "users", userId!, "files"));

  const skeletonFiles: FileType[] = docsResults.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().fileName || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullName: doc.data().fullName,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
  }));

  // console.log(skeletonFiles);

  return (
    <div>
      <Dropzone />

      <section className="container">
        <h2 className="font-serif text-2xl -mb-9 ">All Files</h2>
        <div>
          <TableWrapper skeletonFiles={skeletonFiles}></TableWrapper>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;