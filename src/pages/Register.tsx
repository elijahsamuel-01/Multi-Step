import styled from "styled-components";
import { useState } from "react";
import { BsCamera } from "react-icons/bs";
import pix from "../assets/dummyImg.png";

function Page1() {
  // const va = JSON.parse(localStorage.getItem("data")!);
  const mainData = JSON.parse(localStorage.getItem("data")!);
  const [name, setName] = useState<string>(mainData?.name);
  const [email, setEmail] = useState<string>(mainData?.email);

  return (
    <Main>
      <CircleContainer>
        <Circle c="white" bg="darkcyan">
          1
        </Circle>
        <Line />
        <Circle c="" bg="">
          2
        </Circle>
        <Line />
        <Circle c="" bg="">
          3
        </Circle>
      </CircleContainer>

      <Input
        placeholder="Input your name"
        value={name}
        onChange={(e: any) => {
          setName(e.target.value);
        }}
      />
      <Input
        placeholder="Input your email"
        value={email}
        onChange={(e: any) => {
          setEmail(e.target.value);
        }}
      />

      <ButtonHolder>
        <Button
          bg="black"
          onClick={() => {
            localStorage.setItem("page", JSON.stringify(2));
            window.location.reload();

            const anOBJ: {} = {
              email: mainData.email,
              name: mainData.name,
              password: mainData.password,
              image: mainData.image,
            };
            localStorage.setItem("data", JSON.stringify(anOBJ));
          }}
        >
          Next
        </Button>
      </ButtonHolder>
    </Main>
  );
}
function Page2() {
  let x = JSON.parse(localStorage.getItem("page")!);
  let mainData = JSON.parse(localStorage.getItem("data")!);
  const [password, setPassword] = useState<string>(mainData?.password);

  return (
    <Main>
      <CircleContainer>
        <Circle c="white" bg="darkcyan">
          1
        </Circle>
        <Line />
        <Circle c="white" bg="darkcyan">
          2
        </Circle>
        <Line />
        <Circle c="" bg="">
          3
        </Circle>
      </CircleContainer>

      <Input
        placeholder="Input your password"
        value={password}
        onChange={(e: any) => {
          setPassword(e.target.value);
        }}
      />
      {/* <Input placeholder="Input your email" /> */}

      <ButtonHolder>
        <Button
          bg="black"
          onClick={() => {
            localStorage.setItem("page", JSON.stringify(1));
            window.location.reload();
          }}
        >
          Prev
        </Button>
        <Button
          bg="yellowgreen"
          onClick={() => {
            localStorage.setItem("page", JSON.stringify(3));
            window.location.reload();

            const va = {
              password: mainData.password,
              name: mainData.name,
              email: mainData.email,
            };
            localStorage.setItem("data", JSON.stringify(va));
          }}
        >
          Next
        </Button>
      </ButtonHolder>
    </Main>
  );
}
function Page3() {
  const [image, setImage] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  let mainData = JSON.parse(localStorage.getItem("data")!);

  // const [show, setShow] = useState<number>(0);

  const onHandleImage = (e: any) => {
    const file = e.target.files![0];
    const path = URL.createObjectURL(file);
    const readyImage = URL.createObjectURL(file);

    setImage(path);
    setAvatar(readyImage);
  };

  return (
    <Main>
      <CircleContainer>
        <Circle c="white" bg="darkcyan">
          1
        </Circle>
        <Line />
        <Circle c="white" bg="darkcyan">
          2
        </Circle>
        <Line />
        <Circle c="white" bg="darkcyan">
          3
        </Circle>
      </CircleContainer>

      <Hold>
        <Img src={avatar ? avatar : pix} />
        <Input2
          type="file"
          id="samuel"
          accept="img/jpg, img/png"
          onChange={onHandleImage}
        />
        <Label htmlFor="samuel">
          <BsCamera />
        </Label>
      </Hold>

      <ButtonHolder>
        <Button
          bg="black"
          onClick={() => {
            localStorage.setItem("page", JSON.stringify(2));
            window.location.reload();

            const anObj = {
              image,
              name: mainData.name,
              email: mainData.email,
            };
            localStorage.setItem("data", JSON.stringify(anObj));
          }}
        >
          Prev
        </Button>
      </ButtonHolder>
    </Main>
  );
}

export const Register = () => {
  const x = JSON.parse(localStorage.getItem("page")!);
  console.log("register", x);
  return (
    <div>
      <Container>
        {x === 1 ? (
          <Page1 />
        ) : x === 2 ? (
          <Page2 />
        ) : x === 3 ? (
          <Page3 />
        ) : (
          <Page1 />
        )}
      </Container>
    </div>
  );
};

const Label = styled.label`
  width: 50px;
  height: 50px;
  background-color: white;
  font-size: 25px;
  border-radius: 50%;
  position: absolute;
  bottom: 10px;
  right: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Hold = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Input2 = styled.input`
  display: none;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  /* background-color: blue; */
  border-radius: 50%;
  margin-top: -30px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div<{ bg: string }>`
  width: 70px;
  height: 50px;
  background-color: ${({ bg }) => bg};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ButtonHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 10px;
`;

const Input = styled.input`
  height: 45px;
  width: 100%;
  border: 1px solid darkcyan;
  padding-left: 20px;
  margin-bottom: 20px;
  outline: none;

  &::placeholder {
    font-family: Poppins;
  }
`;

const Line = styled.div`
  width: 50px;
  height: 3px;
  background-color: white;
  margin: 0 10px;
  background-color: darkcyan;
`;

const Circle = styled.div<{ bg: string; c: string }>`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bg }) => bg};
  border-radius: 50%;
  border: 1px solid darkcyan;

  color: ${({ c }) => c};

  font-size: 20px;
`;

const CircleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 60px 0;
`;

const Main = styled.div`
  width: 600px;
  min-height: 400px;
  border: 4px solid darkcyan;
  display: flex;
  align-items: center;
  padding: 10px 40px;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
