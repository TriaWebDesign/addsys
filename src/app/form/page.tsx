import { submitAdmission } from "@/utils/actions/admission.action";

export default function FormPage() {
  return (
    <main className="h-screen bg-gradient-to-r from-pink-400 to-pink-600 flex justify-around items-center">
      <form
        className="p-10 flex flex-col bg-white rounded-lg gap-3 w-[50%]"
        action={submitAdmission}
      >
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          className="p-2 rounded-md border"
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          className="p-2 rounded-md border"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          className="p-2 rounded-md border"
        />
        <input
          type="text"
          name="learningDisorder"
          placeholder="Learning Disorder"
          className="p-2 rounded-md border"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 rounded-md border"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="p-2 rounded-md border"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          className="p-2 rounded-md border"
        />
        <input
          type="file"
          name="documentImage"
          accept="image/*"
          className="p-2 rounded-md border"
        />
        <button type="submit" className="p-3 bg-black text-white rounded-lg">
          Submit
        </button>
      </form>

      <div className="max-w-[30%]">
        <h1 className="text-2xl text-white font-semibold">
          Lorem ipsum dolor sit amet consectetur
        </h1>
        <p className="text-slate-700 text-lg mt-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          illum perspiciatis! Delectus amet, quos illum tempora quo quod odit,
          explicabo recusandae provident iste officiis necessitatibus! Eum ipsum
          itaque suscipit debitis?
        </p>
      </div>
    </main>
  );
}
