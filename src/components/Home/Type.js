import Typewriter from "typewriter-effect";

function Type(props) {
  return (
    <Typewriter
      options={{
        strings: props.string,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
