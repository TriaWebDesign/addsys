import { getAdmissions } from "@/utils/actions/admission.action";
import { Admission } from "@prisma/client";
import Link from "next/link";

const AdmissionPage = async () => {
  const admissions: Admission[] = await getAdmissions();

  return (
    <div className="max-h-screen h-screen p-10 overflow-y-auto">
      <h1>Admissions</h1>
      <div className="relative overflow-x-auto mt-10">
        <input
          type="text"
          placeholder="Search"
          className="border-2 p-1 mb-2 rounded-full text-sm"
        />
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Learning Disorder
              </th>
              <th scope="col" className="px-6 py-3">
                Flag
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {admissions.map((admission, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {admission.firstname + " " + admission.lastname}
                </th>
                <td className="px-6 py-4">{admission.learningDisorder}</td>
                <td className="px-6 py-4">
                  <div
                    className={`p-2 w-5 ${
                      admission.flag ? "bg-red-500" : "bg-green-500"
                    }`}
                  ></div>
                </td>
                <td className="px-6 py-4 flex gap-4">
                  <Link href={`/admissions/${admission.id}`}>View</Link>
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdmissionPage;
