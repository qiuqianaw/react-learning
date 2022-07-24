import { useSearchParams } from "react-router-dom";

function About() {
  const [params] = useSearchParams();
  const id = params.get("id");
  const name = params.get("name");

  return (
    <div>
      about -&gt; {id}-{name}
    </div>
  );
}

export default About;
