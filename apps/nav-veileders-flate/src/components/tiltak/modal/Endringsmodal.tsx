import { Alert, BodyLong, Heading, Modal } from '@navikt/ds-react'
import {
  ApiFunction,
  DeferredFetchState,
  EndreDeltakelseType,
  EndringTypeIkon,
  Forslag,
  useDeferredFetch
} from 'deltaker-flate-common'
import { ReactNode, useState } from 'react'
import { EndringRequest } from '../../../api/data/endre-deltakelse-request'
import { PameldingResponse } from '../../../api/data/pamelding'
import { getEndrePameldingTekst } from '../../../utils/displayText'
import { ModalFooter } from '../../ModalFooter'
import { ModalForslagDetaljer } from '../forslag/ModalForslagDetaljer'
import AvvisningsmodalBody from './Avvisningsmodal'

export type EndringsmodalRequest<T extends EndringRequest> = {
  deltakerId: string
  enhetId: string
  body: T
}

interface Props<T extends EndringRequest> {
  open: boolean
  endringstype: EndreDeltakelseType
  digitalBruker: boolean
  harAdresse: boolean
  onClose: () => void
  onSend: (oppdatertPamelding: PameldingResponse | null) => void
  apiFunction: ApiFunction<PameldingResponse | null, [string, string, T]>
  validertRequest: () => EndringsmodalRequest<T> | null
  forslag: Forslag | null
  erUnderOppfolging: boolean
  children: ReactNode
}
export function Endringsmodal<T extends EndringRequest>({
  open,
  endringstype,
  digitalBruker,
  harAdresse,
  onSend,
  onClose,
  apiFunction,
  validertRequest,
  forslag,
  erUnderOppfolging,
  children
}: Props<T>) {
  const [visAvvisningsmodal, setAvvisningsmodal] = useState(false)

  return (
    <Modal
      open={open}
      header={{
        icon: visAvvisningsmodal ? undefined : (
          <EndringTypeIkon type={endringstype} />
        ),
        heading: visAvvisningsmodal
          ? 'Avvis forslag'
          : endringstekst(endringstype)
      }}
      onClose={onClose}
      className="w-[600px]"
    >
      {visAvvisningsmodal && forslag ? (
        <AvvisningsmodalBody
          disabled={!erUnderOppfolging}
          onSend={onSend}
          forslag={forslag}
        />
      ) : (
        <EndringsmodalBody
          onSend={onSend}
          onAvvis={() => setAvvisningsmodal(true)}
          apiFunction={apiFunction}
          validertRequest={validertRequest}
          forslag={forslag}
          digitalBruker={digitalBruker}
          harAdresse={harAdresse}
          erUnderOppfolging={erUnderOppfolging}
        >
          {children}
        </EndringsmodalBody>
      )}
    </Modal>
  )
}

interface EndrinsmodalBodyProps<T extends EndringRequest> {
  onSend: (oppdatertPamelding: PameldingResponse | null) => void
  onAvvis: () => void
  apiFunction: ApiFunction<PameldingResponse | null, [string, string, T]>
  validertRequest: () => EndringsmodalRequest<T> | null
  forslag: Forslag | null
  digitalBruker: boolean
  harAdresse: boolean
  erUnderOppfolging: boolean
  children: ReactNode
}
function EndringsmodalBody<T extends EndringRequest>({
  onSend,
  onAvvis,
  apiFunction,
  validertRequest,
  forslag,
  digitalBruker,
  harAdresse,
  erUnderOppfolging,
  children
}: EndrinsmodalBodyProps<T>) {
  const { state, error, doFetch } = useDeferredFetch(apiFunction)
  const [valideringsError, setValideringsError] = useState<string>()

  const sendEndring = () => {
    try {
      const request = validertRequest()
      if (request) {
        doFetch(request.deltakerId, request.enhetId, request.body).then(
          (data) => onSend(data)
        )

        setValideringsError(undefined)
      }
    } catch (e) {
      if (e as Error) setValideringsError((e as Error).message)
    }
  }

  return (
    <>
      <Modal.Body>
        <Alert className="mb-6" variant="info" size="small">
          {getEndrePameldingTekst(digitalBruker, harAdresse)}
        </Alert>
        {forslag && (
          <ModalForslagDetaljer
            disabled={!erUnderOppfolging}
            forslag={forslag}
            onClick={onAvvis}
          />
        )}

        {!erUnderOppfolging && (
          <Alert variant="error" size="small" className="mb-6">
            <Heading level="2" size="xsmall">
              Det kan ikke gjøres endringer på deltakelsen
            </Heading>
            Brukeren er ikke registrert som “under oppfølging”. Det må fattes et
            14a-vedtak før deltakelsen på tiltaket kan endres.
          </Alert>
        )}

        {children}
        {!digitalBruker && !harAdresse && (
          <div className="flex items-center mt-4">
            <Alert variant="warning" size="small">
              <BodyLong className="mt-1" size="small">
                Personen er reservert mot digital kommunikasjon, og har heller
                ingen registrert kontaktadresse. De vil derfor ikke motta et
                varsel om vedtaket. Vedtaket som journalføres i Gosys må skrives
                ut og leveres til personen på annen måte.
              </BodyLong>
            </Alert>
          </div>
        )}
      </Modal.Body>
      <ModalFooter
        confirmButtonText="Lagre"
        onConfirm={sendEndring}
        confirmLoading={state === DeferredFetchState.LOADING}
        disabled={state === DeferredFetchState.LOADING || !erUnderOppfolging}
        error={valideringsError ?? error ?? undefined}
      />
    </>
  )
}

function endringstekst(endringstype: EndreDeltakelseType) {
  switch (endringstype) {
    case EndreDeltakelseType.IKKE_AKTUELL:
      return 'Er ikke aktuell'
    case EndreDeltakelseType.ENDRE_SLUTTARSAK:
      return 'Endre sluttårsak'
    case EndreDeltakelseType.AVSLUTT_DELTAKELSE:
      return 'Avslutt deltakelse'
    case EndreDeltakelseType.ENDRE_INNHOLD:
      return 'Endre innhold'
    case EndreDeltakelseType.ENDRE_BAKGRUNNSINFO:
      return 'Endre bakgrunnsinfo'
    case EndreDeltakelseType.ENDRE_SLUTTDATO:
      return 'Endre sluttdato'
    case EndreDeltakelseType.ENDRE_OPPSTARTSDATO:
      return 'Endre oppstartsdato'
    case EndreDeltakelseType.FORLENG_DELTAKELSE:
      return 'Forleng deltakelse'
    case EndreDeltakelseType.ENDRE_DELTAKELSESMENGDE:
      return 'Endre deltakelsesmengde'
    case EndreDeltakelseType.REAKTIVER_DELTAKELSE:
      return 'Endre til aktiv deltakelse'
    default:
      throw new Error(`Endringstekst for ${endringstype} er ikke implementert`)
  }
}
