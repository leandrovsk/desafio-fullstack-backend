import { z } from "zod";
import { DeepPartial } from "typeorm";
import { contactSchema, contactSchemaRequest, contactsSchemaResponse } from "../schemas/contacts.schemas";

type TContactRequest = z.infer<typeof contactSchemaRequest>
type TContact = z.infer<typeof contactSchema>
type TContactResponse = z.infer<typeof contactSchema>
type TContactsResponse = z.infer<typeof contactsSchemaResponse>
type TContactUpdate = DeepPartial<TContactRequest>

export { TContact, TContactRequest, TContactResponse, TContactUpdate, TContactsResponse }