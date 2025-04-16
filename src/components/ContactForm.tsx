import { Paper, Typography, Box, TextField, Button } from "@mui/material";
import { theme } from "../theme/Theme";
import { useState } from "react";
import { mask as masker } from "remask";

export const ContactForm = () => {
  const formspreeUrl = "https://formspree.io/f/xgvabaap";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: { hasError: false, message: "" },
    email: { hasError: false, message: "" },
    phone: { hasError: false, message: "" },
    message: { hasError: false, message: "" }
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Máscara para telefone
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = masker(e.target.value, ['(99) 9999-9999', '(99) 99999-9999']);
    setFormData({ ...formData, phone: maskedValue });
    
    // Validação em tempo real
    if (isSubmitted || errors.phone.hasError) {
      validateField('phone', maskedValue);
    }
  };

  // Validação de email
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Validação de campo individual
  const validateField = (fieldName: keyof typeof formData, value: string) => {
    let isValid = true;
    let message = "";
    
    switch (fieldName) {
      case 'name':
        isValid = value.trim() !== "";
        message = isValid ? "" : "Nome é obrigatório";
        break;
      case 'email':
        isValid = validateEmail(value);
        message = isValid ? "" : "Digite um email válido";
        break;
      case 'phone':
        isValid = value.replace(/\D/g, '').length >= 10;
        message = isValid ? "" : "Digite um telefone válido (com DDD)";
        break;
      case 'message':
        isValid = value.trim() !== "";
        message = isValid ? "" : "Mensagem é obrigatória";
        break;
    }
    
    setErrors(prev => ({
      ...prev,
      [fieldName]: { hasError: !isValid, message }
    }));
    
    return isValid;
  };

  // Validação antes do envio
  const validateForm = () => {
    setIsSubmitted(true);
    const nameValid = validateField('name', formData.name);
    const emailValid = validateField('email', formData.email);
    const phoneValid = validateField('phone', formData.phone);
    const messageValid = validateField('message', formData.message);
    
    return nameValid && emailValid && phoneValid && messageValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const form = e.target as HTMLFormElement;
      form.submit();
    }
  };

  // Validação em tempo real quando o campo perde o foco
  const handleBlur = (fieldName: keyof typeof formData) => {
    if (formData[fieldName]) {
      validateField(fieldName, formData[fieldName]);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: { xs: 2, md: 4 },
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: { xs: 3, md: 4 },
          width: "100%",
          maxWidth: 450,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          border: `1px solid ${theme.palette.secondary.main}`,
          borderRadius: "16px",
          boxShadow: `0 8px 32px ${theme.palette.grey[700]}20`,
          "&:hover": {
            boxShadow: `0 12px 40px ${theme.palette.grey[700]}30`,
          },
        }}
      >
        <Typography
          align="center"
          variant="h2"
          sx={{
            mb: 3,
            fontWeight: 700,
            color: theme.palette.text.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.5,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <Box
            component="span"
            sx={{
              width: "24px",
              height: "24px",
              backgroundColor: theme.palette.primary.main,
              borderRadius: "4px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          Entre em contato
        </Typography>

        <Typography
          align="center"
          sx={{
            mb: 2,
            color: theme.palette.text.primary,
          }}
        >
          Fale conosco hoje mesmo para agendar uma consulta e descobrir como
          podemos te ajudar a garantir a proteção e os cuidados adequados para
          quem você ama.
        </Typography>

        <Box
          component="form"
          action={formspreeUrl}
          method="POST"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            name="name"
            label="Nome Completo"
            variant="filled"
            fullWidth
            required
            color="secondary"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            onBlur={() => handleBlur('name')}
            error={errors.name.hasError}
            helperText={errors.name.message}
            FormHelperTextProps={{ sx: { color: errors.name.hasError ? 'error.main' : 'text.secondary', mt: 0.5 } }}
          />

          <TextField
            name="email"
            label="Email"
            variant="filled"
            type="email"
            fullWidth
            required
            color="secondary"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            onBlur={() => handleBlur('email')}
            error={errors.email.hasError}
            helperText={errors.email.message}
            FormHelperTextProps={{ sx: { color: errors.email.hasError ? 'error.main' : 'text.secondary', mt: 0.5 } }}
          />

          <TextField
            name="phone"
            label="Telefone (WhatsApp)"
            variant="filled"
            fullWidth
            required
            color="secondary"
            value={formData.phone}
            onChange={handlePhoneChange}
            onBlur={() => handleBlur('phone')}
            error={errors.phone.hasError}
            helperText={errors.phone.message}
            placeholder="(99) 99999-9999"
            FormHelperTextProps={{ sx: { color: errors.phone.hasError ? 'error.main' : 'text.secondary', mt: 0.5 } }}
          />

          <TextField
            name="message"
            label="Mensagem"
            variant="filled"
            fullWidth
            multiline
            rows={4}
            required
            color="secondary"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            onBlur={() => handleBlur('message')}
            error={errors.message.hasError}
            helperText={errors.message.message}
            FormHelperTextProps={{ sx: { color: errors.message.hasError ? 'error.main' : 'text.secondary', mt: 0.5 } }}
            sx={{ mt: 1 }}
          />

          <input type="hidden" name="_subject" value="Novo contato do site" />
          <input type="hidden" name="_language" value="pt" />
          
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={Object.values(errors).some(error => error.hasError)}
            sx={{
              mt: 2,
              py: 1.5,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              fontWeight: 600,
              borderRadius: "8px",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                transform: "translateY(-2px)",
                boxShadow: `0 4px 12px ${theme.palette.primary.main}80`,
              },
              "&:disabled": {
                backgroundColor: theme.palette.grey[500],
                color: theme.palette.grey[300],
              }
            }}
          >
            Enviar Mensagem
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};