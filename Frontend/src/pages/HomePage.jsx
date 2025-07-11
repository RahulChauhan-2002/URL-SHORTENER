import UrlForm from "../components/UrlForm";

const HomePage = () => {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">🔗 URL Shortener</h1>
      <UrlForm />
    </div>
  );
};

export default HomePage;
