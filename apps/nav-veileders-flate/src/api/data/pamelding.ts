import {
  DeltakerlisteStatus,
  DeltakerStatusAarsakType,
  DeltakerStatusType,
  Tiltakstype,
  vedtaksinformasjonSchema
} from 'deltaker-flate-common'
import { z } from 'zod'
import { aktivtForslagSchema } from './forslag.ts'

export const tiltakstypeSchema = z.nativeEnum(Tiltakstype)
export const deltakerStatusTypeSchema = z.nativeEnum(DeltakerStatusType)
export const deltakerStatusAarsakTypeSchema = z.nativeEnum(
  DeltakerStatusAarsakType
)

export const deltakerlisteStatusSchema = z.nativeEnum(DeltakerlisteStatus)

export const innholdselementSchema = z.object({
  tekst: z.string(),
  innholdskode: z.string()
})

export const innholdSchema = z.object({
  tekst: z.string(),
  innholdskode: z.string(),
  valgt: z.boolean(),
  beskrivelse: z.string().nullable()
})

export const deltakelsesinnholdSchema = z.object({
  ledetekst: z.string(),
  innhold: z.array(innholdSchema)
})

export const deltakerlisteSchema = z.object({
  deltakerlisteId: z.string().uuid(),
  deltakerlisteNavn: z.string(),
  tiltakstype: tiltakstypeSchema,
  arrangorNavn: z.string(),
  oppstartstype: z.string(),
  startdato: z.string(),
  sluttdato: z.string().nullable(),
  status: deltakerlisteStatusSchema,
  tilgjengeligInnhold: z.array(innholdselementSchema)
})

export const deltakerStatusAarsakSchema = z.object({
  type: deltakerStatusAarsakTypeSchema,
  beskrivelse: z.string().nullable()
})

export const pameldingStatusSchema = z.object({
  id: z.string().uuid(),
  type: deltakerStatusTypeSchema,
  aarsak: deltakerStatusAarsakSchema.nullable(),
  gyldigFra: z.string(),
  gyldigTil: z.string().nullable(),
  opprettet: z.string()
})

export const pameldingSchema = z.object({
  deltakerId: z.string().uuid(),
  fornavn: z.string(),
  mellomnavn: z.string().nullable(),
  etternavn: z.string(),
  deltakerliste: deltakerlisteSchema,
  status: pameldingStatusSchema,
  startdato: z.string().nullable(),
  sluttdato: z.string().nullable(),
  dagerPerUke: z.number().nullable(),
  deltakelsesprosent: z.number().nullable(),
  bakgrunnsinformasjon: z.string().nullable(),
  deltakelsesinnhold: deltakelsesinnholdSchema.nullable(),
  vedtaksinformasjon: vedtaksinformasjonSchema.nullable(),
  adresseDelesMedArrangor: z.boolean(),
  kanEndres: z.boolean(),
  digitalBruker: z.boolean(),
  maxVarighet: z.number().nullable(),
  softMaxVarighet: z.number().nullable(),
  forslag: z.array(aktivtForslagSchema)
})

export type DeltakerStatusAarsak = z.infer<typeof deltakerStatusAarsakSchema>
export type Innhold = z.infer<typeof innholdSchema>
export type Deltakerliste = z.infer<typeof deltakerlisteSchema>
export type PameldingResponse = z.infer<typeof pameldingSchema>
export type Deltakelsesinnhold = z.infer<typeof deltakelsesinnholdSchema>
export type Innholdselement = z.infer<typeof innholdselementSchema>
