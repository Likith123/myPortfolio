import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const main = {
  backgroundColor: "#0a0a0a",
  color: "#ffffff",
  fontFamily: "sans-serif",
};
const container = {
  padding: "40px",
  border: "1px solid #222",
  borderRadius: "12px",
  margin: "20px auto",
};
const h1 = { color: "#22c55e", fontSize: "24px", fontWeight: "bold" };
const hr = { borderColor: "#333", margin: "20px 0" };
const text = { color: "#ffffff", fontSize: "14px", margin: "10px 0" };
const messageBox = {
  backgroundColor: "#111",
  padding: "20px",
  borderRadius: "8px",
  borderLeft: "4px solid #22c55e",
};
const messageText = {
  color: "#ffffff",
  fontSize: "14px",
  lineHeight: "1.5",
  whiteSpace: "pre-wrap",
};
const footer = { color: "#666", fontSize: "12px", marginTop: "30px" };

export const EmailTemplate = ({
  fullName,
  email,
  subject,
  message,
}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>New Message from {fullName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>{subject}</Heading>
        <Hr style={hr} />
        <Section>
          <Text style={text}>
            <strong>Sender:</strong> {fullName}
          </Text>
          <Text style={text}>
            <strong>Email:</strong> {email}
          </Text>
        </Section>
        <Section style={messageBox}>
          <Text style={messageText}>{message}</Text>
        </Section>
        <Text style={footer}>Sent from your Portfolio Website</Text>
      </Container>
    </Body>
  </Html>
);
