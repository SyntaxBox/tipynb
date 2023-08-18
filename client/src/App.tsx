import Nav from "./components/Nav/Nav";
import Upload from "./components/Upload/Upload";
import { Container, H1 } from "./ui";

function App() {
  return (
    <main>
      <Nav />
      <Container className="flex flex-col items-center gap-8 mt-8">
        <H1 className="text-pink-500 w-full">
          Transform{" "}
          <i className="bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200 font-normal rounded-lg py-1 px-2">
            .ipynb
          </i>{" "}
          files intro Python and PDF files
        </H1>
        <Upload />
      </Container>
    </main>
  );
}

export default App;
