export default function ModalAddExpense() {
  return (
    <>
      {/* <Modal isOpen={isOpenAddWeekly} onClose={onCloseAddWeekly}>
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
              </Flex>
            </ModalBody>

            <ModalFooter gap="1rem">
              <Button variant="cancelAction">Cancelar</Button>

              <Button
                variant="confirmAction"
                onClick={() => {
                  handleAddWeeklyExpense();
                }}
              >
                Salvar nova despesa
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal> */}
    </>
  );
}
