import { useState } from "react";


const Field = ({ name, label, type = "text", as, value, onChange, error }) => (
  <div style={s.field}>
    <label>{label}</label>
    {as === "select" ? (
      <select name={name} value={value} onChange={onChange} style={s.input}>
        <option value="">Select</option>
        {(name === "state"
          ? ["Andhra Pradesh", "Karnataka", "Maharashtra", "Tamil Nadu", "Delhi"]
          : ["India", "United States", "United Kingdom", "Canada"]
        ).map(o => <option key={o}>{o}</option>)}
      </select>
    ) : as === "textarea" ? (
      <textarea name={name} value={value} onChange={onChange} style={s.input} rows={2} />
    ) : (
      <input name={name} type={type} value={value} onChange={onChange} style={s.input} />
    )}
    {error && <span style={s.err}>{error}</span>}
  </div>
);

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", password: "", confirm: "",
    address: "", city: "", state: "", country: "", zip: "", agree: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!/^\d{10}$/.test(form.phone)) e.phone = "Enter 10 digits";
    if (form.password.length < 6) e.password = "Min 6 characters";
    if (form.confirm !== form.password) e.confirm = "Passwords don't match";
    if (!form.address.trim()) e.address = "Required";
    if (!form.city.trim()) e.city = "Required";
    if (!form.state) e.state = "Required";
    if (!form.country) e.country = "Required";
    if (!/^\d{5,6}$/.test(form.zip)) e.zip = "Invalid zip";
    if (!form.agree) e.agree = "Please accept terms";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  if (submitted) return (
    <div style={s.center}>
      <h2>✅ Registration Successful!</h2>
      <p>Welcome, <b>{form.name}</b>!</p>
      <button onClick={() => setSubmitted(false)}>Go Back</button>
    </div>
  );

  console.log(form);
  

  return (
    <div style={s.wrap}>
      <h2 style={{ margin: "0 0 1rem" }}>Register</h2>
      <form onSubmit={handleSubmit}>

        <Field name="name"     label="Full Name *"       value={form.name}     onChange={handle} error={errors.name} />
        <Field name="email"    label="Email *"            value={form.email}    onChange={handle} error={errors.email}    type="email" />
        <Field name="phone"    label="Phone *"            value={form.phone}    onChange={handle} error={errors.phone}    type="tel" />
        <Field name="password" label="Password *"         value={form.password} onChange={handle} error={errors.password} type="password" />
        <Field name="confirm"  label="Confirm Password *" value={form.confirm}  onChange={handle} error={errors.confirm}  type="password" />
        <Field name="address"  label="Address *"          value={form.address}  onChange={handle} error={errors.address}  as="textarea" />
        <Field name="city"     label="City *"             value={form.city}     onChange={handle} error={errors.city} />
        <Field name="state"    label="State *"            value={form.state}    onChange={handle} error={errors.state}    as="select" />
        <Field name="country"  label="Country *"          value={form.country}  onChange={handle} error={errors.country}  as="select" />
        <Field name="zip"      label="Zip Code *"         value={form.zip}      onChange={handle} error={errors.zip} />

        <div style={s.field}>
          <label>
            <input type="checkbox" name="agree" checked={form.agree} onChange={handle} />
            {" "}I agree to Terms & Conditions
          </label>
          {errors.agree && <span style={s.err}>{errors.agree}</span>}
        </div>

        <button type="submit" style={s.btn}>Create Account</button>
      </form>
    </div>
  );
}

const s = {
  wrap:  { maxWidth: 480, margin: "2rem auto", padding: "2rem", border: "1px solid #ddd", borderRadius: 10, fontFamily: "sans-serif" },
  field: { display: "flex", flexDirection: "column", marginBottom: "0.8rem" },
  input: { padding: "8px 10px", fontSize: 14, borderRadius: 6, border: "1px solid #ccc", marginTop: 4 },
  err:   { color: "red", fontSize: 12, marginTop: 2 },
  btn:   { width: "100%", padding: 10, fontSize: 15, background: "#4f46e5", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer" },
  center:{ textAlign: "center", marginTop: "3rem", fontFamily: "sans-serif" },
};