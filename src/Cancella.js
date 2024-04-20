const Cancella = (props) => {
  const eliminaId = (e) => {
    const id = e.target.id;

    const timbrata = { id };

    fetch(
      "https://tarateo.altervista.org/biagiometro/api/presenze/delete.php",
      {
        method: "POST",
        header: { "content-type": "application/json" },
        body: JSON.stringify(timbrata),
      }
    ).then((res) => {
      // setIsPending(false);
    });
  };

  return (
    <button id={props.id} onClick={eliminaId}>
      X{props.id}
    </button>
  );
};

export default Cancella;
