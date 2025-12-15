export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy for MrPOC</h1>
        
        <div className="space-y-6 text-lg">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
            <p className="mb-2">We collect and store:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>User authentication data (phone number)</li>
              <li>Medical record data</li>
              <li>Patient profile information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p>Data is encrypted and stored securely on our servers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Sharing</h2>
            <p>We do not share your data with third parties.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
