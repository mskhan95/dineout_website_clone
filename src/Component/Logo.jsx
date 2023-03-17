import { Image, Box, Flex, keyframes } from '@chakra-ui/react';

export default function Logo() {
  const size = '100px';

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      ml='100px'
      h="100px"
      w="100px"
      overflow="hidden">
      {/* Ideally, only the box should be used. The <Flex /> is used to style the preview. */}
      <Box
        as="div"
        position="relative"
        w={size}
        h={size}
        _before={{
          // content: "''",
          position: 'relative',
          display: 'block',
          // width: '300%',
          // height: '300%',
          // boxSizing: 'border-box',
          marginLeft: '-20rem',
          // marginTop: '-16rem',
          // borderRadius: '50%',
        }}>
        <Image
          src="https://im1.dineout.co.in/images/uploads/misc/2019/Jul/25/website-logo.png"
          // size="full"
          position="absolute"
          top={8}
        />
      </Box>
    </Flex>
  );
}