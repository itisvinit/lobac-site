import { useState } from "react";

export default function LobacHomepage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    role: "",
    message: "",
  });

  const handleSubmit = async () => {
    alert("Submitted! (Backend to be added)");
  };

  return (
    <div className="p-6 space-y-10">
      <section className="text-center space-y-3">
        <h1 className="text-4xl font-bold">Lobac</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Empowering rural and Tier 2/3 India with efficient delivery of post-structure home construction services – tiles, sanitaryware, wood, labor & more.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Tiles", "Sanitaryware", "Electricals", "UPVC Windows", "Wood", "Labor Coordination"].map((service) => (
            <div key={service} className="p-4 text-center border rounded-md font-medium">{service}</div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">How Lobac Works</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>No inventory model – we coordinate sourcing city-wise</li>
          <li>Targeting high-margin new constructions only</li>
          <li>Strong local labor + brand partnerships</li>
          <li>Data-driven delivery timelines & analytics</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Partner With Us</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <input
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="p-2 border rounded"
          />
          <input
            placeholder="Role (Supplier / Labor / Builder)"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="p-2 border rounded"
          />
          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="p-2 border rounded col-span-2"
          />
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSubmit}>
          Submit
        </button>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Lobac. Built with purpose.
      </footer>
    </div>
  );
}