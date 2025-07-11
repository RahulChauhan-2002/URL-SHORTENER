import { useState } from "react";
import { createShortUrl } from "../api/shortUrl.api";
const UrlForm = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async () => {
    const data = await createShortUrl(longUrl);
    setShortUrl(data);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    // Reset the copied state after 5 seconds
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };
  return (
    <div className="space-y-4">
      <label className="block text-gray-700 mb-2" htmlFor="longUrl">
        Enter Long URL:
      </label>
      <input
        type="url"
        id="longUrl"
        name="longUrl"
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="https://example.com/very/long/link"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        required
      />

      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Shorten URL
      </button>

      {/* {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                {error}
            </div>
        )} */}

      {shortUrl && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Your shortened URL:</h2>
          <div className="flex items-center">
            <input
              type="text"
              readOnly
              value={shortUrl}
              className="flex-1 p-2 border border-gray-300 rounded-l-md bg-gray-50"
            />
            <button
              onClick={handleCopy}
              className={`px-4 py-2 rounded-r-md transition-colors duration-200 ${
                copied
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlForm;
