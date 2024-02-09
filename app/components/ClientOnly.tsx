//rendering children only on the client side

"use client";

import { useEffect, useState } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  //variable to track wether the component has mounted
  const [hasMounted, setHasMounted] = useState(false);

  //useEffect runs after the component has been mounted
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  //if the components has mounted return its children
  return <>{children}</>;
};

export default ClientOnly;
