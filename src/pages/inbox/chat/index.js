import Header from "./components/header";
import Reply from "./components/reply";
import Messages from "pages/inbox/chat/components/messages";
import { useState } from "react";

export default function Chat() {
  const user = {
    name: "Furkan Tuna",
    avatar:
      "https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg",
  };

  const [messages, setMessages] = useState([
    {
      from: {
        id: "0hJUEJ886DSNGvGgGd5I2LeonYx1",
        name: "Furkan Tuna",
        username: "tayfunerbilen",
        avatar:
          "https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg",
      },
      message: "grup",
    },
    {
      from: {
        id: "suHVqhI93ce88gqchKp09XIGLZF2",
        name: "ömer",
        username: "Elwron",
        avatar:
          "https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg",
      },
      message: "test",
    },
    {
      from: {
        id: "suHVqhI93ce88gqchKp09XIGLZF2",
        name: "ömer",
        username: "Elwron",
        avatar:
          "https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg",
      },
      message: "deneme",
    },
    {
      from: {
        id: "suHVqhI93ce88gqchKp09XIGLZF2",
        name: "ömer",
        username: "Elwron",
        avatar:
          "https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg",
      },
      message: "adana",
    },
    {
      from: {
        id: "0hJUEJ886DSNGvGgGd5I2LeonYx1",
        name: "Furkan Tuna",
        username: "tayfunerbilen",
        avatar:
          "https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg",
      },
      message:
        "w etw etkwe tokw eotk woetk woekt woket owekt owket okwe otkwe otke wotkew tokw etoke otk ept okwet powektpweoktwepotkweptokwetpokwet",
    },
    {
      from: {
        id: "0hJUEJ886DSNGvGgGd5I2LeonYx1",
        name: "Furkan Tuna",
        username: "tayfunerbilen",
        avatar:
          "https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg",
      },
      message: "grup",
    },
    {
      from: {
        id: "suHVqhI93ce88gqchKp09XIGLZF2",
        name: "ömer",
        username: "Elwron",
        avatar:
          "https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg",
      },
      message: "test",
    },
    {
      from: {
        id: "suHVqhI93ce88gqchKp09XIGLZF2",
        name: "ömer",
        username: "Elwron",
        avatar:
          "https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg",
      },
      message: "deneme",
    },
    {
      from: {
        id: "suHVqhI93ce88gqchKp09XIGLZF2",
        name: "ömer",
        username: "Elwron",
        avatar:
          "https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg",
      },
      message: "adana",
    },
    {
      from: {
        id: "0hJUEJ886DSNGvGgGd5I2LeonYx1",
        name: "Furkan Tuna",
        username: "tayfunerbilen",
        avatar:
          "https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg",
      },
      message:
        "w etw etkwe tokw eotk woetk woekt woket owekt owket okwe otkwe otke wotkew tokw etoke otk ept okwet powektpweoktwepotkweptokwetpokwet",
    },
    {
      from: {
        id: "0hJUEJ886DSNGvGgGd5I2LeonYx1",
        name: "Furkan Tuna",
        username: "tayfunerbilen",
        avatar:
          "https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg",
      },
      message: "grup",
    },
    {
      from: {
        id: "suHVqhI93ce88gqchKp09XIGLZF2",
        name: "ömer",
        username: "Elwron",
        avatar:
          "https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg",
      },
      message: "test",
    },
    {
      from: {
        id: "suHVqhI93ce88gqchKp09XIGLZF2",
        name: "ömer",
        username: "Elwron",
        avatar:
          "https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg",
      },
      message: "deneme",
    },
    {
      from: {
        id: "suHVqhI93ce88gqchKp09XIGLZF2",
        name: "ömer",
        username: "Elwron",
        avatar:
          "https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg",
      },
      message: "adana",
    },
    {
      from: {
        id: "0hJUEJ886DSNGvGgGd5I2LeonYx1",
        name: "Furkan Tuna",
        username: "tayfunerbilen",
        avatar:
          "https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg",
      },
      message:
        "w etw etkwe tokw eotk woetk woekt woket owekt owket okwe otkwe otke wotkew tokw etoke otk ept okwet powektpweoktwepotkweptokwetpokwet",
    },
  ]);

  return (
    <div className="flex-1">
      <Header user={user} />
      <Messages messages={messages} />
      <Reply setMessages={setMessages} />
    </div>
  );
}
