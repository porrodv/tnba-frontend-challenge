interface Info {
  category: string;
  value: string;
}

const infoMockup: Info[] = [
  {
    category: 'Branch',
    value: 'ClearWelding',
  },
  {
    category: 'dimensions',
    value: 'Extra Large: 73 x 109mm',
  },
  {
    category: 'Branch',
    value: 'ClearWelding',
  },
  {
    category: 'dimensions',
    value: 'Extra Large: 73 x 109mm',
  },

  {
    category: 'Branch',
    value: 'ClearWelding',
  },
  {
    category: 'dimensions',
    value: 'Extra Large: 73 x 109mm',
  },
  {
    category: 'Branch',
    value: 'ClearWelding',
  },
  {
    category: 'dimensions',
    value: 'Extra Large: 73 x 109mm',
  },
];

export default function Specifications() {
  return (
    <section id='specifications'>
      <table className='table-auto border-collapse w-full border border-gray-400 text-zinc-700 text-md'>
        <tbody>
          {infoMockup.map(({ category, value }, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-zinc-100' : 'bg-white'} hover:bg-zinc-200`}
            >
              <td className='border px-4 py-2 font-semibold'>{category}</td>
              <td className='border px-4 py-2'>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
