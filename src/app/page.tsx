import React from "react";
import Link from "next/link";

const Index = () => {
  return (
    <div>
      Hello world!
      <div className={"mt-3 text-center w-full"}>
        <div>
          <Link className={"underline"} href={"/cv"}>
            Go to cv viewer..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
