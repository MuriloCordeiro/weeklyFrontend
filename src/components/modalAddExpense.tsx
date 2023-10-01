import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  Text,
  Input,
  ModalFooter,
  Button,
  ModalContent,
  Select,
  Checkbox,
} from "@chakra-ui/react";

type modalAddExpenseType = {
  isOpen: boolean;
  onClose: () => void;
  setTitle: any;
  setDescription: any;
  setValue: any;
  action: () => void;
  setValueOfType: any;
  checkBoxValue: boolean;
  setInstallments: any;
};

export default function ModalAddExpense({
  isOpen,
  onClose,
  setDescription,
  setTitle,
  setValue,
  setValueOfType,
  checkBoxValue,
  action,
  setInstallments,
}: modalAddExpenseType) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="#005165">Adicione uma nova despesa</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" gap="2rem">
              <Flex direction="column">
                <Text fontWeight="bold" color="#005165">
                  Título
                </Text>
                <Input
                  placeholder="Ex: conta de luz"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </Flex>

              <Flex direction="column">
                <Text fontWeight="bold" color="#005165">
                  Descrição
                </Text>
                <Input
                  placeholder="Ex: a conta deve ser paga em 2x"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </Flex>
              <Flex direction="column">
                <Text fontWeight="bold" color="#005165">
                  Valor
                </Text>
                <Input
                  placeholder="Ex: R$150,00"
                  onChange={(e) => {
                    setValue(e.target.value);
                  }}
                />
              </Flex>
              <Flex direction="column">
                <Text fontWeight="bold" color="#005165">
                  Tipo
                </Text>
                <Select
                  onChange={(e) => {
                    setValueOfType(e.target.value);
                  }}
                >
                  <option value="variable">Variável</option>
                  <option value="fixed">Fixa</option>
                </Select>
              </Flex>
              <Flex direction="column">
                <Checkbox
                  isChecked={checkBoxValue}
                  fontWeight="bold"
                  color="#005165"
                >
                  Se repete?
                </Checkbox>
              </Flex>
              <Flex
                display={checkBoxValue ? "flex" : "none"}
                direction="column"
              >
                <Text fontWeight="bold" color="#005165">
                  Quantas vezes?
                </Text>
                <Input
                  placeholder="Ex: 12"
                  onChange={(e) => {
                    setInstallments(e.target.value);
                  }}
                />
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter gap="1rem">
            <Button onClick={() => onClose()} variant="cancelAction">
              Cancelar
            </Button>

            <Button
              variant="confirmAction"
              onClick={() => {
                action();
              }}
            >
              Salvar nova despesa
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
