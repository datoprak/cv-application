import { Button } from "antd";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import "../styles/Navbar.css"

const Navbar = ({ clearCv, loadExample }) => {
  const [loading, setLoading] = useState(false);

  const generatePDF = () => {
    setLoading(true);
    const cv = document.querySelector(".cv");
    html2canvas(cv).then(canvas => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("portrait", "mm", "a4", true);
      const width = doc.internal.pageSize.getWidth();
      const height = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, width, height);
      doc.save("cv.pdf");
      setLoading(false);
    });
  };

  return (
    <nav>
      <h1 className="logo">
        <span className="material-symbols-outlined">article</span> CV Generator
      </h1>
      <div className="buttons">
        <Button
          className="download-btn"
          type="primary"
          loading={loading}
          onClick={generatePDF}
        >
          DOWNLOAD
        </Button>
        <Button type="primary" danger onClick={clearCv}>
          CLEAR
        </Button>
        <Button type="primary" onClick={loadExample}>
          LOAD EXAMPLE
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
