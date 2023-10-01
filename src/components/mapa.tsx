const Mapa = () => {
  return (
    <div className="mt-10" onClick={()=> console.log("iframe mapa")}>
      <iframe
        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50374.071153609366!2d-79.9494614049635!3d-2.1588272699536226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6d8fcd79ae01%3A0x9d9ca97dc94f9419!2sUrdesa%2C%20Guayaquil!5e0!3m2!1ses-419!2sec!4v1683399984522!5m2!1ses-419!2sec"
        src="https://www.google.com/maps/place/Urdesa,+Guayaquil/@-2.1626357,-79.9193029,15z/data=!3m1!4b1!4m6!3m5!1s0x902d6d8fcd79ae01:0x9d9ca97dc94f9419!8m2!3d-2.1620979!4d-79.9116519!16s%2Fm%2F04f5l8m?hl=es-419&entry=ttu"
        style={{
          height: "600px",
          width: "100%",
          border: "none",
        }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Mapa;
