import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        mx="auto"
        w="auto"
        h="auto"
        maxH={['350px', '450px', '600px']}
        maxW={['300px', '500px', '900px']}
      >
        <ModalBody p="0">
          <Image src={imgUrl} objectFit="cover" />
        </ModalBody>
        <ModalFooter background="pGray.800" borderBottomRadius="6px" py={'3'}>
          <Link w="100%" textDecoration="none" href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
