import { useState } from "react";
import axios from "axios";

type FormData = {
  command: string;
  address: string;
  //   routers: string;
};

export default function LookingGlass() {
  const [command, setCommand] = useState<string>("");
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
      <section className="flex justify-center items-center max-w-5xl mx-auto p-4">
        <div className="border-solid border-2 border-black rounded-lg p-5 shadow-2xl">
          <form onSubmit={handleSubmit} className="grid gap-2">
            <div className="grid grid-cols-3">
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
              <div className="grid grid-flow-row">
                <h5>Command</h5>
                <div className="grid grid-flow-col">
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
              </div>
              <div className="grid grid-flow-row auto-rows-max">
                <label htmlFor="address">Target IP</label>
                <input
                className="bg-gray-200 rounded-md"
                  type="text"
                  name="address"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className=" text-white bg-rose-700 hover:bg-rose-800 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 place-self-center"
            >
              Execute
            </button>
          </form>
        </div>
      </section>

      {result && (
        <section className="bg-slate-200 flex items-center max-w-5xl mx-auto p-4 rounded-md">
          <h2>Response Data</h2>
          <div className="">
            <pre>{result}</pre>
          </div>
        </section>
      )}
    </>
  );
}
