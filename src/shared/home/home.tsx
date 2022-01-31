import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC, memo } from "react";

import logo from "@/assets/logo.svg";
import Counter from "@/features/counter/ui";
import ThemeToggleButton from "@/shared/theme-toggle-button/ThemeToggleButton";

const textFontSizes = [16, 18, 24, 30];

const Home: FC = (): JSX.Element => {
  return (
    <Box>
      <Flex
        as="header"
        direction="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        fontSize="3xl"
      >
        <motion.div
          animate={{ rotateZ: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          <Image src={logo} alt="" h="40vmin" />
        </motion.div>
        <Text fontSize={textFontSizes}>
          Hello Vite + React + Typescript + Chakra UI!
        </Text>
        <Counter />
        <Text fontSize={textFontSizes}>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </Text>
        <Text fontSize={textFontSizes}>
          <Link isExternal href="https://reactjs.org" color="#61dafb">
            Learn React
          </Link>
          {" | "}
          <Link
            isExternal
            href="https://vitejs.dev/guide/features.html"
            color="#61dafb"
          >
            Vite Docs
          </Link>
          {" | "}
          <Link
            isExternal
            href="https://www.typescriptlang.org/"
            color="#61dafb"
          >
            Typescript
          </Link>
          {" | "}
          <Link isExternal href="https://chakra-ui.com" color="#61dafb">
            Chakra UI
          </Link>
        </Text>
      </Flex>
      <ThemeToggleButton pos="fixed" bottom="2" right="2" />
    </Box>
  );
};

export default memo(Home);
