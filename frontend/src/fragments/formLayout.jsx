import Layout from "./layoutFrag";

const FormLayout = (props) => {
  const { formName, children } = props;
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-primary py-6 px-12 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-center mb-6 font-Header text-black">
            {formName}
          </h2>
          {children}
        </div>
      </div>
    </Layout>
  );
};

export default FormLayout;
