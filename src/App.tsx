import { useState } from "react"
import imgReact from "./assets/react.svg"
import axios from "axios"

type FormData = {
  command: string;
  address: string;
  //   routers: string;
};

export default function App() {

  const [command,setCommand] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [router, setRouter] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data: FormData = {
      command,
      address: address,
      //   routers: router,
    };

    try {
      console.log(data);

      //   Uncomment the lines below to send the POST request
      const response = await axios.post("http://localhost:8080/v1/icmp/", data);
      if (response.status === 200) {
        console.log("Request successful:", response.data);
        setResult(response.data.data);
      } else {
        console.log("Request failed:", response);
      }
    } catch (error) {
      console.error("Error during request:", error);
    }
  };

  return (
    <>
    <main>
      <header className="max-w-full mx-auto p-7">
        <div className="flex justify-center items-center">
          <img src={imgReact} alt="Myreact" width={100} height={24} />
        </div>
      </header>
      <section className="max-w-6xl mx-auto p-4">
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2">
              <div className="grid grid-flow-row auto-rows-max">
                <label htmlFor="router">Router</label>
                <select
                  name="router"
                  id="router"
                  value={router}
                  onChange={(e) => setRouter(e.target.value)}
                >
                  <option value="">Select a router</option>
                  <option value="jakarta">Jakarta</option>
                  <option value="surabaya">Surabaya</option>
                </select>
              </div>
              <div>
                <div className="grid grid-flow-row auto-rows-max">
                  <label htmlFor="pingku">
                    <input
                      type="radio"
                      name="command"
                      id="ping"
                      value="ping"
                      checked={command === "ping"}
                      onChange={() => setCommand("ping")}
                    />
                    Ping
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="command"
                      id="traceroute"
                      value="traceroute"
                      checked={command === "traceroute"}
                      onChange={() => setCommand("traceroute")}
                    />
                    Traceroute
                  </label>
                </div>
                <div>
                  <label htmlFor="address">Target IP</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="flex jutify-center">
              Execute
            </button>
          </form>
        </div>
      </section>
      {result && (
        <section>
          <h2>Response Data</h2>
          <pre>{result}</pre>
        </section>
      )}
    </main>
    </>
  )
}