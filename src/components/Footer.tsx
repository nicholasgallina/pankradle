// src/app/components/Footer.tsx
export default function Footer() {
  return (
    <>
      <hr className="my-20 border-3"></hr>
      <div className="flex justify-center gap-20 pb-20">
        <a href="/privacypolicy">
          <h2 className="cursor-pointer hover:scale-110 transition-all duration-200">
            Privacy Policy
          </h2>
        </a>
        <a href="/cookiepolicy">
          <h2 className="cursor-pointer hover:scale-110 transition-all duration-200">
            Cookie Policy
          </h2>
        </a>
      </div>
    </>
  );
}
