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
  Spinner,
} from "@chakra-ui/react";

type modalUpdateExpenseType = {
  isOpen: boolean;
  onClose: () => void;
  setTitle: any;
  title: any;
  setDescription: any;
  description: any;
  setValue: any;
  value: any;
  action: () => void;
  setValueOfType: any;
  valueOfType: any;
  checkBoxValue: boolean;
  setInstallments: any;
  installments: any;
  isLoading: boolean;
};

export default function ModalUpdateExpense({
  isOpen,
  onClose,
  setDescription,
  description,
  setTitle,
  title,
  setValue,
  value,
  setValueOfType,
  valueOfType,
  checkBoxValue,
  action,
  setInstallments,
  installments,
  isLoading,
}: modalUpdateExpenseType) {
  function cleanModal() {
    description = "";
    title = "";
    value = "";
    valueOfType = "";
    installments = "";
    isLoading = true;
    onClose();
  }

  console.log("Carregando?", isLoading);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="#005165">Altere a despesa</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" gap="2rem">
              <Flex direction="column">
                <Text fontWeight="bold" color="#005165">
                  Título
                </Text>

                {!isLoading && (
                  <Input
                    value={title}
                    placeholder="Ex: conta de luz"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                )}
                {isLoading && <Spinner size="sm" />}
              </Flex>

              <Flex direction="column">
                <Text fontWeight="bold" color="#005165">
                  Descrição
                </Text>
                {!isLoading && (
                  <Input
                    value={description}
                    placeholder="Ex: a conta deve ser paga em 2x"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                )}
                {isLoading && <Spinner size="sm" />}
              </Flex>
              <Flex direction="column">
                <Text fontWeight="bold" color="#005165">
                  Valor
                </Text>
                {!isLoading && (
                  <Input
                    value={value}
                    placeholder="Ex: R$150,00"
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                  />
                )}
                {isLoading && <Spinner size="sm" />}
              </Flex>
              <Flex direction="column">
                <Text fontWeight="bold" color="#005165">
                  Tipo
                </Text>
                {!isLoading && (
                  <Select
                    onChange={(e) => {
                      setValueOfType(e.target.value);
                    }}
                    value={valueOfType}
                  >
                    <option value="variable">Variável</option>
                    <option value="fixed">Fixa</option>
                  </Select>
                )}
                {isLoading && <Spinner size="sm" />}
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
                  value={installments}
                  placeholder="Ex: 12"
                  onChange={(e) => {
                    setInstallments(e.target.value);
                  }}
                />
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter gap="1rem">
            <Button
              onClick={() => {
                cleanModal();
              }}
              variant="cancelAction"
            >
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
