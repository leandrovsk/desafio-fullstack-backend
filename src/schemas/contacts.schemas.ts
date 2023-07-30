import { z } from "zod";

const contactSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    createdAt: z.string()

})

const contactSchemaRequest = contactSchema.omit({
    id: true,
    createdAt: true
})

const contactSchemaUpdate = contactSchema.omit({
    id: true,
    createdAt: true
}).partial()

const contactsSchemaResponse = z.array(contactSchema)

export { contactSchema, contactSchemaRequest, contactSchemaUpdate, contactsSchemaResponse }