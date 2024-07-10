interface Props {
  name: string;
}

export default function Description({ name }: Props) {
  return (
    <article id='description'>
      <h2 className='text-xl text-zinc-700 font-semibold'>{name}</h2>
      <p className='text-md text-zinc-700 mt-4'>
        The Speedglas G5-01 VC Heavy Duty Flip Up Welding Helmet with Adflo PAPR
        is the highly anticipated and newest welding helmet with PAPR from the
        team that invented the auto darkening welding helmet. This helmet is
        designed for heavy welders and has a range of new features not
        previously seen - including the ability to choose one of three colour
        tones for dark state shades, ability to direct airflow to different
        areas of the helmet, slimmer design easier for confined spaces,
        additional comfort features in the harness and an optional light for the
        front of the helmet. The G501 also comes with a range of new spares
        making it a very versatile helmet and gives the welder the ability to
        either reduce the weight/size of the helmet, or increase their
        protection by adding extra head protection. This is the standard
        Speedglas G501 VC without the task light. If you are looking for the
        Speedglas G501VC with the task light installed, you can find it here.
      </p>
      <h2 className='text-xl text-zinc-700 font-semibold mt-10'>Features</h2>
      <ul className='text-md text-zinc-700 mt-4 list-disc ps-5'>
        <li>
          The ability to easily remove the lens for when you are grinding
          (making it lighter).
        </li>
        <li>
          The ability to choose where you want the air directed in the helmet
          (if your eyes dry out when using a PAPR usually, this is an amazing
          feature).
        </li>
        <li>
          Slightly narrower helmet design than the 9100XXi FX Air, which is
          better for confined space work.
        </li>
        <li>
          The option of including a task light is a popular feature and we can
          install the task light meaning you don not have to.
        </li>
      </ul>
    </article>
  );
}
