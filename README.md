# Ant Tree Viewer for Visual Studio Code

This extension displays the node tree of an Apache Ant build file on the sidebar of Visual Studio Code, and will jump to the matching code line when you click the target function, or antcall.

![Ant Tree Viewer](/resources/vscode-atv.gif?raw=true)

This project is based on the [XML Tools for Visual Studio Code](https://github.com/DotJoshJohnson/vscode-xml) extension made by [DotJoshJohnson](https://github.com/DotJoshJohnson).

## Donate
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHbwYJKoZIhvcNAQcEoIIHYDCCB1wCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYB57n7bBOlo5RK+kSI6N7HDywLZbNnmbyM/34hvIHcqClFYpddnPLAngXbVLt22Qv705oVOJ497/Jv0zKdK4ZxwS5Z7Fr1J52WiiObOKGf3JVDjAElXwK/XrGeKbWOLfCBnwc/ILsXZ1VRtvTuwo4N+XWB0C/3Omkkj3uwwzX1DVDELMAkGBSsOAwIaBQAwgewGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQIOBfgyRxZLJ2AgcinDfcWHYayDme9O2KCa0ElBwTNHYT74yp/+ziWGuaIYEYTlujRi1LNhYVdyLgdFgcwNzoLphZVofWxnyofyyzvrq2PXnNurLrM+YEodHWtJvlsp+VBFSJf3K7RbuXy7UwmL5z6X5Y19mTC7xmzs/eX4SVAX7QL3Ri7JBEkYdeFKHcSK6gO775Y6YGzhV0WZodaukMxz3xtxcS9jt4I4u7HmB3/VESo/rhd+GMOreXxykgG8YgPCeWG2jSlSm1HdmAxmDWeb//TxaCCA4cwggODMIIC7KADAgECAgEAMA0GCSqGSIb3DQEBBQUAMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTAeFw0wNDAyMTMxMDEzMTVaFw0zNTAyMTMxMDEzMTVaMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAwUdO3fxEzEtcnI7ZKZL412XvZPugoni7i7D7prCe0AtaHTc97CYgm7NsAtJyxNLixmhLV8pyIEaiHXWAh8fPKW+R017+EmXrr9EaquPmsVvTywAAE1PMNOKqo2kl4Gxiz9zZqIajOm1fZGWcGS0f5JQ2kBqNbvbg2/Za+GJ/qwUCAwEAAaOB7jCB6zAdBgNVHQ4EFgQUlp98u8ZvF71ZP1LXChvsENZklGswgbsGA1UdIwSBszCBsIAUlp98u8ZvF71ZP1LXChvsENZklGuhgZSkgZEwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tggEAMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADgYEAgV86VpqAWuXvX6Oro4qJ1tYVIT5DgWpE692Ag422H7yRIr/9j/iKG4Thia/Oflx4TdL+IFJBAyPK9v6zZNZtBgPBynXb048hsP16l2vi0k5Q2JKiPDsEfBhGI+HnxLXEaUWAcVfCsQFvd2A1sxRr67ip5y2wwBelUecP3AjJ+YcxggGaMIIBlgIBATCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwCQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTE3MDgzMTA5MzcwNVowIwYJKoZIhvcNAQkEMRYEFNdhX7FIU3+43c3+0iwC4iMrUxIFMA0GCSqGSIb3DQEBAQUABIGAFgiAHhFG+iiksEyn6wdpRzPgL9LgJOLnAFYc3Y4TpucrqSRhnhg26cD6kSyZPmRZzZSvTynZ/k100N1+qLbghiRiJD7ZLL4z2Dg8OOloRUiQ34a9p1DkhPtQ4CBs5L1apKg2BlsvmpKPi5zRtY3eUhHlg+eBBzg9Wv3bw/zR5V0=-----END PKCS7-----
">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>

## Release Notes
Detailed release notes can be found [here](https://github.com/PedroGuerraPT/vscode-atv/releases).

## Issues
Run into a bug? Report it [here](https://github.com/PedroGuerraPT/vscode-atv/issues).

## Icon Credits
Icons used in the Ant Tree View are used under the Creative Commons 3.0 BY license.
* "Code" icon by Dave Gandy from https://www.flaticon.com/
* "At" and "Target" icon by FreePik from https://www.flaticon.com/
* "Ant" icon by https://icons8.com
* "Tree" icon by WEWEKA DESiGNERS from https://www.iconfinder.com
