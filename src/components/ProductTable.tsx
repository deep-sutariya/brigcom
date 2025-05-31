type ProductTable = {
    title: string;
    productList: string[];
}

const KeyValueTable = ({
  title,
  data,
}: {
  title: string;
  data: string[];
}) => (
  <section className="p-3 md:p-6">
    <h2 className=" text-base md:text-xl font-bold text-gray-700 font-heading mb-3 md:mb-6 uppercase">
      {title}
    </h2>
    <table className="w-full table-auto text-xs md:text-sm text-gray-500 border border-[#169EBE]/30">
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr
            key={key}
            className="border-b border-[#169EBE]/30 last:border-0 hover:bg-[#169EBE]/5 text-xs md:text-base"
          >
            <td className="py-2 pl-5 text-gray-500">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default function ProductTable({title, productList} : ProductTable) {
  return (
    <div className="w-full">
        <KeyValueTable title={title} data={productList} />
    </div>
  );
};