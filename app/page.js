import Image from "next/image";
import "@/app/main.scss"
import "@/app/styles.scss"
import BoardView from "./components/Board";
export default function Home() {
  return (
    <div className="">
      <BoardView/>
    </div>
  );
}
