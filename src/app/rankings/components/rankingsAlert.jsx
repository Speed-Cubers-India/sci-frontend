import { Alert } from "@chakra-ui/react";

const RankingAlert = () => {
  return (
    <Alert.Root className="my-6">
      <Alert.Title>
        This ranking considers only the competitions organized by SCI. If you
        want to get listed in this ranking, please attend a competition
        organized by SCI. If you have aleady participated in any SCI competition
        and if your name is not there in the ranking list, please claim your
        state by sending an email to{" "}
        <a
          className="hover:underline hover:underline-offset-2"
          href="mailto:speedcubersindiadata@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          speedcubersindiadata@gmail.com
        </a>{" "}
        by attaching your ID proof.
      </Alert.Title>
    </Alert.Root>
  );
};

export default RankingAlert;
