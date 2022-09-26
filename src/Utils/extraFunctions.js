export const notify = (toast, title, status, description) => {
  return toast({
    title,
    status,
    description,
    duration: 3000,
    variant: "top-accent",
    isClosable: true,
  });
};
