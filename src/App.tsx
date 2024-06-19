import FootBar from "./components/FootBar";
import Jumbotron from "./components/Jumbotron";
import LookingGlass from "./components/LookingGlassForm";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <main>
        <div className="flex justify-center mx-auto flex-col max-w-5xl py-5">
          <p>
            Looking Glass are online tools that allow users to run diagnostic
            tests on the network from the perspective of the our infrastructure.
            By using a Looking Glass tool, users can gain insights into network
            performance and routing from various locations within the ISP's
            network, helping to identify and diagnose network issues, verify
            routing configurations, and understand how traffic is being routed
            through the provider's network. These tools are especially useful
            for troubleshoot connectivity problems, optimize network
            performance, and ensure efficient data routing.
          </p>
        </div>
        <LookingGlass />
        <section className="flex justify-center mx-auto flex-col max-w-5xl py-5">
          <div>
            <h3>Ping</h3>
            <p>
              Ping is a network diagnostic utility that uses the Internet
              Control Message Protocol (ICMP) to test the reachability of a host
              on an IP network. By sending ICMP Echo Request messages to the
              target host and waiting for Echo Reply messages, it measures the
              round-trip time (RTT) for messages to travel to the destination
              and back, providing an indication of latency. Ping is widely used
              for troubleshooting network connectivity issues, identifying
              packet loss, and determining network performance. The output
              typically includes statistics on the number of packets sent,
              received, and lost, as well as the minimum, maximum, and average
              RTT. It is an essential tool for network administrators to
              diagnose and resolve network problems.
            </p>
          </div>
          <div>
            <h3>Traceroute</h3>
            <p>
              Traceroute is a network diagnostic tool used to track the pathway
              packets take from one computer to another over an IP network. It
              works by sending a sequence of Internet Control Message Protocol
              (ICMP) Echo Request packets (or UDP packets on some systems) to
              the destination with incrementally increasing Time-to-Live (TTL)
              values. Each router along the path decrements the TTL by one and,
              when it reaches zero, the router sends an ICMP Time Exceeded
              message back to the source. By examining these responses,
              traceroute maps the route and measures the transit delays of
              packets across the network. The output typically lists each hop's
              IP address and the round-trip time (RTT) for each probe sent,
              helping identify where delays or packet losses occur, which is
              crucial for troubleshooting network performance issues and
              diagnosing routing problems.
            </p>
          </div>
        </section>
      </main>
      <FootBar />
    </>
  );
}
