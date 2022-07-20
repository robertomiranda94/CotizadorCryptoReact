import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;

  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }

`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen cripto"
      />
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          El precio más alto del día es: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          El precio más bajo del día es: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          El precio cambió en las últimas 24 horas:{" "}
          <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          La última actualización fue: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
