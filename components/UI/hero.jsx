import {
  Heading,
  Container,
  Flex,
  Text,
  Box,
  useColorModeValue,
  Link
} from '@chakra-ui/react';
import styles from '../../styles/Home.module.css';
import NextLink from 'next/link';

const NLink = ({ children, href }) => {
  return (
    <NextLink href={href} passHref>
      <Link>{children}</Link>
    </NextLink>
  );
};

const Hero = () => {
  return (
    <Box id="/" mb="40px" display="block" boxSizing="border-box">
      <Flex
        flexWrap="nowrap"
        gridAutoColumns="1fr"
        gridTemplateColumns="0.25fr 0.75fr"
        gridTemplateRows="auto"
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        pb={50}
        borderBottom={`2px solid ${useColorModeValue('#37393F', '#37393F')}`}
      >
        <Box
          position="relative"
          width="872.328px"
          display="block"
          boxSizing="border-box"
          className={styles.textContainer}
        >
          <Container position="relative" display="block" mb="20px" mt="0px">
            <Heading as="h2" variant="page-title" size="2xl">
              Software &
            </Heading>
            <Heading as="h2" variant="page-title" size="2xl">
              Machine Learning
            </Heading>
            <Heading as="h2" variant="page-title-2" size="2xl">
              Engineer
            </Heading>
            <Box
              position="relative"
              width="535px"
              display="block"
              maxW="none"
              boxSizing="border-box"
            >
              <Text variant="outline-s" fontSize="xl" mb="31px" mt="60px">
                I design pipelines, choose models for training data, evaluate
                and train the models & fine-tune models.
              </Text>
              <Text variant="outline-s" fontSize="xl" mb="31px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                ex tempus, cursus mi nec, volutpat diam.
              </Text>
              <NLink href="#portfolio">ABOUT ME</NLink>
            </Box>
          </Container>
        </Box>
        <Box
          position="relative"
          top="30px"
          height="600px"
          width="400px"
          borderRadius="20px"
          border={`2px solid ${useColorModeValue('#37393F', '#37393F')}`}
        >
          <div className={styles.cardContainer}>
            <div className={`${styles.card} ${styles.card0}`}>
              <div className={styles.border}>
                <h2>Victor Nyoyoko</h2>
              </div>
            </div>
          </div>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
