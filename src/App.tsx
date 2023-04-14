import { Container } from "@mui/material";
import DemoVideo from "./components/DemoVideo";
import Footer from "./components/Footer";
import ImageGallary from "./components/ImageGallary";
import PageHeader from "./components/PageHeader";
import ProjectDescription from "./components/ProjectDescription";

function App() {
  return (
    <div className="App relative min-h-screen pb-48">
      <Container maxWidth="md">
        <div className="flex flex-col gap-8 py-8">
          <PageHeader />
          <ProjectDescription />
          <DemoVideo />
          <ImageGallary />
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
