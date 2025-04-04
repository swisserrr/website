import IndusIndEnterprise from 'containers/IndusIndEnterprise';
import dynamic from 'next/dynamic';
const PDFViewer = dynamic(() => import('components/PdfViewer'), { ssr: false });

const IndusIndEnterpriseEmoha = () => {
  return <IndusIndEnterprise IndusIndEnterprise={true} />;
  // return (
  //   <div>
  //     <PDFViewer fileUrl="/static/PDF/IndusIndPage.pdf" />
  //   </div>
  // );
};

export default IndusIndEnterpriseEmoha;
