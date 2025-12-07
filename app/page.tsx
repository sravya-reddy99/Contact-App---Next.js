import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p=8 pb-5 gap-5 sm:p-20 font-(family-name:--font-geist-sans)">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Contact Manager</h1>
        <p className="text-lg text-gray-600 mb-6">
          Manage your contacts efficiently and effortlessly.
        </p>
          <Image
            src="/contact_home.jpg"
            alt="Contact Manager Illustration"
            width={600}
            height={600}
            objectFit="contain"
            className="rounded-lg shadow-lg relative"
          />
        <div className="text-center">
        <p className="text-lg text-gray-600 mb-6">
          Start managing your contacts today!
        </p>
        </div>
      </div>
    </div>
  );
}
