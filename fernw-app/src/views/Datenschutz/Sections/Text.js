import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <h2 className={classes.title}>
                        Datenschutzerklärung
                    </h2>
                    <h5 className={classes.description}>



                        Allgemeiner Hinweis und Pflichtinformationen
                        <br/>

                        Benennung der verantwortlichen Stelle
                        <br/>

                        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                        <br/>

                        FernW GmbH & Co. KG<br/>
                        Max Mustermann<br/>
                        Musterweg 12<br/>
                        12345 Musterort<br/>

                        Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).

                        Widerruf Ihrer Einwilligung zur Datenverarbeitung

                        Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.

                        Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde

                        Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html.

                        Recht auf Datenübertragbarkeit

                        Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.

                        Recht auf Auskunft, Berichtigung, Sperrung, Löschung

                        Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.

                        SSL- bzw. TLS-Verschlüsselung

                        Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.

                        <br/><br/>

                        <strong>
                        Kontaktformular<br/></strong>

                        Per Kontaktformular übermittelte Daten werden einschließlich Ihrer Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu können oder um für Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht statt.

                        Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.

                        Über das Kontaktformular übermittelte Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder keine Notwendigkeit der Datenspeicherung mehr besteht. Zwingende gesetzliche Bestimmungen - insbesondere Aufbewahrungsfristen - bleiben unberührt.

                        Speicherdauer von Beiträgen und Kommentaren

                        Beiträge und Kommentare sowie damit in Verbindung stehende Daten, wie beispielsweise IP-Adressen, werden gespeichert. Der Inhalt verbleibt auf unserer Website, bis er vollständig gelöscht wurde oder aus rechtlichen Gründen gelöscht werden musste.

                        Die Speicherung der Beiträge und Kommentare erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit bereits erfolgter Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
                        <br/><br/>
                        <strong>Newsletter-Daten<br/></strong>

                        Zum Versenden unseres Newsletters benötigen wir von Ihnen eine E-Mail-Adresse. Eine Verifizierung der angegebenen E-Mail-Adresse ist notwendig und der Empfang des Newsletters ist einzuwilligen. Ergänzende Daten werden nicht erhoben oder sind freiwillig. Die Verwendung der Daten erfolgt ausschließlich für den Versand des Newsletters.

                        Die bei der Newsletteranmeldung gemachten Daten werden ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) verarbeitet. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail oder Sie melden sich über den Austragen-Link im Newsletter ab. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.

                        Zur Einrichtung des Abonnements eingegebene Daten werden im Falle der Abmeldung gelöscht. Sollten diese Daten für andere Zwecke und an anderer Stelle an uns übermittelt worden sein, verbleiben diese weiterhin bei uns.

                        <br/><br/><strong>YouTube</strong><br/>

                        Für Integration und Darstellung von Videoinhalten nutzt unsere Website Plugins von YouTube. Anbieter des Videoportals ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.

                        Bei Aufruf einer Seite mit integriertem YouTube-Plugin wird eine Verbindung zu den Servern von YouTube hergestellt. YouTube erfährt hierdurch, welche unserer Seiten Sie aufgerufen haben.

                        YouTube kann Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen, sollten Sie in Ihrem YouTube Konto eingeloggt sein. Durch vorheriges Ausloggen haben Sie die Möglichkeit, dies zu unterbinden.

                        Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.

                        Einzelheiten zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube unter: https://www.google.de/intl/de/policies/privacy.

                        <br/> <br/><strong>Cookies</strong><br/>

                        Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.

                        Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website wiederzuerkennen.

                        Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schließen des Programms von selbst gelöscht werden. Die Deaktivierung von Cookies kann eine eingeschränkte Funktionalität unserer Website zur Folge haben.

                        Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und reibungslosen Bereitstellung unserer Dienste. Sofern die Setzung anderer Cookies (z.B. für Analyse-Funktionen) erfolgt, werden diese in dieser Datenschutzerklärung separat behandelt.

                        <br/><br/> <strong>PayPal</strong><br/>

                        Unsere Website ermöglicht die Bezahlung via PayPal. Anbieter des Bezahldienstes ist die PayPal (Europe) S.à.r.l. et Cie, S.C.A., 22-24 Boulevard Royal, L-2449 Luxembourg.

                        Wenn Sie mit PayPal bezahlen, erfolgt eine Übermittlung der von Ihnen eingegebenen Zahlungsdaten an PayPal.

                        Die Übermittlung Ihrer Daten an PayPal erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur Erfüllung eines Vertrags). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. In der Vergangenheit liegende Datenverarbeitungsvorgänge bleiben bei einem Widerruf wirksam.

                        <br/><br/><strong>Sofortüberweisung</strong><br/>

                        Unsere Website ermöglicht die Bezahlung via “Sofortüberweisung.” Anbieter des Bezahldienstes ist die Sofort GmbH, Theresienhöhe 12, 80339 München.

                        Mit Hilfe des Verfahrens “Sofortüberweisung” erhalten wir in Echtzeit eine Zahlungsbestätigung von der Sofort GmbH und können unverzüglich mit der Erfüllung unserer Verbindlichkeiten beginnen.

                        Beim Bezahlen per “Sofortüberweisung” erfolgt eine Übermittlung Ihrer PIN und TAN an die Sofort GmbH. Der Bezahlanbieter loggt sich damit in Ihr Online-Banking-Konto ein, überprüft automatisch Ihren Kontostand und nimmt die Überweisung vor. Es folgt eine unverzügliche Transaktionsbestätigung. Ihre Umsätze, der Kreditrahmen Ihres Dispokredits und die Existenz anderer Konten sowie deren Bestände werden nach dem Einloggen ebenfalls automatisiert geprüft.

                        Neben PIN und TAN umfasst die Übermittlung an die Sofort GmbH außerdem Zahlungsdaten sowie Daten zu Ihrer Person. Die Daten zu Ihrer Person umfassen Vor- und Nachname, Adresse, Telefonnummer(n), Email-Adresse, IP-Adresse und ggf. weitere für die Zahlungsabwicklung notwendige Daten. Es besteht eine Notwendigkeit dieser Datenübermittlung, um Ihre Identität zweifelsfrei festzustellen und Betrugsversuchen vorzubeugen.

                        Die Übermittlung Ihrer Daten an die Sofort GmbH erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) und Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung zur Erfüllung eines Vertrags). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. In der Vergangenheit liegende Datenverarbeitungsvorgänge bleiben bei einem Widerruf wirksam.

                        Einzelheiten zur Zahlung mit Sofortüberweisung finden Sie unter: https://www.sofort.de/datenschutz.html und https://www.klarna.com/sofort/.

                        <br/><br/><strong>Twitter Plugin</strong><br/>

                        Unsere Website vewendet Funktionen des Dienstes Twitter. Anbieter ist die Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA.

                        Bei Nutzung von Twitter und der Funktion Re-Tweet werden von Ihnen besuchte Websites mit Ihrem Twitter-Account verknüpft und in Ihrem Twitter-Feed veröffentlicht. Dabei erfolgt eine Übermittlung von Daten an Twitter. Über den Inhalt der übermittelten Daten sowie die Nutzung dieser Daten durch Twitter haben wir keine Kenntnis. Einzelheiten finden Sie in der Datenschutzerklärung von Twitter: https://twitter.com/privacy.

                        Sie können Ihre Datenschutzeinstellungen bei Twitter ändern: https://twitter.com/account/settings
                    </h5>
                </GridItem>
            </GridContainer>
            <div>

            </div>
        </div>
    );
}
