import certificate from ".././assets/images/scrum-training.jpg";

const CertificatePage = () => {
  return (
    <div className="w-screen h-screen grid place-content-center  ">
      <img
        className="border-2 border-red-700 rounded"
        width={900}
        src={certificate}
        alt="scrum-training-certificate"
      />
    </div>
  );
};

export default CertificatePage;
