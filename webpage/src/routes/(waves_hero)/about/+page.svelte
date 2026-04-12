<script lang="ts">
	import { base } from '$app/paths';
	import WaveTitle from '$lib/components/organisms/WaveTitle.svelte';
</script>

<WaveTitle compact>
	<div class="container"><h1>CV</h1></div>
</WaveTitle>

<div class="container page-content">
	<div class="cv-layout">
		<!-- Sidebar -->
		<aside class="sidebar">
			<div class="sidebar-card">
				<div class="avatar-wrap">
					<img
						src={`${base}/images/portrait_itu.png`}
						alt="Johannes Gabriel Sindlinger"
						class="avatar"
					/>
				</div>
				<h1 class="sidebar-name">Johannes<br />Gabriel<br />Sindlinger</h1>
				<p class="sidebar-title">PhD Student · NLP &amp; AI</p>

				<div class="sidebar-links">
					<a href="mailto:info@gsindlinger.com" class="sidebar-link">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							><path
								d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
							/><polyline points="22,6 12,12 2,6" /></svg
						>
						info@gsindlinger.com
					</a>
					<a
						href="https://github.com/gsindlinger"
						target="_blank"
						rel="noopener noreferrer"
						class="sidebar-link"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
							><path
								d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
							/></svg
						>
						gsindlinger
					</a>
					<a
						href="https://www.linkedin.com/in/gsindlinger/"
						target="_blank"
						rel="noopener noreferrer"
						class="sidebar-link"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
							><path
								d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
							/></svg
						>
						gsindlinger
					</a>
					<a href="#" class="sidebar-link">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
							><path
								d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"
							/></svg
						>
						Google Scholar
					</a>
				</div>

				<div class="sidebar-section">
					<h3>Research Interests</h3>
					<ul class="interest-list">
						<li>Data Attribution</li>
						<li>NLP Interpretability</li>
						<li>AI Safety &amp; Copyright</li>
					</ul>
				</div>

				<div class="sidebar-section">
					<h3>Languages</h3>
					<div class="lang-list">
						<div class="lang-item">
							<span class="lang-name">German</span>
							<span class="lang-level">Native</span>
						</div>
						<div class="lang-item">
							<span class="lang-name">English</span>
							<span class="lang-level">Fluent</span>
						</div>
						<div class="lang-item">
							<span class="lang-name">French</span>
							<span class="lang-level">Intermediate</span>
						</div>
						<div class="lang-item">
							<span class="lang-name">Danish</span>
							<span class="lang-level">Beginner</span>
						</div>
					</div>
				</div>
			</div>
		</aside>

		<!-- Main content -->
		<main class="cv-main">
			<!-- Education -->
			<section class="cv-section">
				<h2 class="section-title">
					<span class="section-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg
						>
					</span>
					Education
				</h2>
				<div class="timeline">
					<div class="timeline-item">
						<div class="timeline-meta">
							<span class="timeline-date">Sep 2025 – present</span>
							<span class="timeline-badge phd">PhD</span>
						</div>
						<div class="timeline-content">
							<h3>Doctor of Philosophy, Computer Science</h3>
							<p class="timeline-org">
								<a href="https://www.itu.dk" target="_blank" rel="noopener noreferrer"
									>IT University of Copenhagen</a
								>
								· NLPnorth Lab
							</p>
							<p class="timeline-detail">
								PhD Project: "Faithful Attribution to Training Data for Large Language Models".
								Supervised by <a
									href="https://annargrs.github.io"
									target="_blank"
									rel="noopener noreferrer">Anna Rogers</a
								>.
							</p>
						</div>
					</div>

					<div class="timeline-item">
						<div class="timeline-meta">
							<span class="timeline-date">Apr 2022 – May 2025</span>
							<span class="timeline-badge msc">M.Sc.</span>
						</div>
						<div class="timeline-content">
							<h3>Master of Science, Data and Computer Science</h3>
							<p class="timeline-org">
								<a href="https://www.uni-heidelberg.de" target="_blank" rel="noopener noreferrer"
									>Heidelberg University</a
								>
							</p>
							<p class="timeline-detail">
								Thesis: "Exploring Table Representations for Question Answering"
							</p>
						</div>
					</div>

					<div class="timeline-item">
						<div class="timeline-meta">
							<span class="timeline-date">Jan 2024 – Jun 2024</span>
							<span class="timeline-badge msc">M.Sc.</span>
						</div>
						<div class="timeline-content">
							<h3>Erasmus+ Exchange</h3>
							<p class="timeline-org">
								<a href="https://www.ku.dk" target="_blank" rel="noopener noreferrer"
									>University of Copenhagen</a
								>
							</p>
						</div>
					</div>

					<div class="timeline-item">
						<div class="timeline-meta">
							<span class="timeline-date">Apr 2020 – Feb 2022</span>
							<span class="timeline-badge bsc">B.Sc.</span>
						</div>
						<div class="timeline-content">
							<h3>Bachelor of Science, Computer Science</h3>
							<p class="timeline-org">
								<a href="https://www.uni-ulm.de" target="_blank" rel="noopener noreferrer"
									>Ulm University</a
								>
							</p>
							<p class="timeline-detail">
								Thesis: "Combinatorial Test Methods in the Analysis of Actuarial Software"
							</p>
						</div>
					</div>

					<div class="timeline-item">
						<div class="timeline-meta">
							<span class="timeline-date">Oct 2016 – Jan 2022</span>
							<span class="timeline-badge bsc">B.Sc.</span>
						</div>
						<div class="timeline-content">
							<h3>Bachelor of Science, Mathematics and Management</h3>
							<p class="timeline-org">
								<a href="https://www.uni-ulm.de" target="_blank" rel="noopener noreferrer"
									>Ulm University</a
								>
							</p>
							<p class="timeline-detail">
								Thesis: "Visualizations of Stochastic Models in Retirement Planning"
							</p>
						</div>
					</div>
				</div>
			</section>

			<!-- Experience -->
			<section class="cv-section">
				<h2 class="section-title">
					<span class="section-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path
								d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
							/></svg
						>
					</span>
					Experience
				</h2>
				<div class="timeline">
					<div class="timeline-item">
						<div class="timeline-meta">
							<span class="timeline-date">Jan 2022 – Dec 2023</span>
							<span class="timeline-badge intern">Intern</span>
						</div>
						<div class="timeline-content">
							<h3>Internship &amp; Working Student, Software Development</h3>
							<p class="timeline-org">iteratec GmbH · Vienna &amp; Frankfurt</p>
							<p class="timeline-detail">
								Developed and maintained internal software tools, including an IT tender management
								system, a kiosk system, and an Attribute-Based Access Control system.
							</p>
						</div>
					</div>

					<div class="timeline-item">
						<div class="timeline-meta">
							<span class="timeline-date">Sep 2018 – Feb 2019</span>
							<span class="timeline-badge intern">Intern</span>
						</div>
						<div class="timeline-content">
							<h3>Internship, Risk Instruments Department</h3>
							<p class="timeline-org">Mercedes-Benz Bank AG</p>
							<p class="timeline-detail">Data analysis &amp; internal process optimization.</p>
						</div>
					</div>

					<div class="timeline-item">
						<div class="timeline-meta">
							<span class="timeline-date">Feb 2016 – present</span>
							<span class="timeline-badge editor">Editor</span>
						</div>
						<div class="timeline-content">
							<h3>Editor for Reviews &amp; Events</h3>
							<p class="timeline-org">
								<a href="https://www.mtb-news.de" target="_blank" rel="noopener noreferrer"
									>MTB-News</a
								> / eMTB-News / Rennrad-News / Nimms-Rad
							</p>
						</div>
					</div>

					<div class="timeline-item">
						<div class="timeline-meta">
							<span class="timeline-date">Sep 2015 – Aug 2016</span>
							<span class="timeline-badge volunteer">Volunteer</span>
						</div>
						<div class="timeline-content">
							<h3>Voluntary Social Year</h3>
							<p class="timeline-org">Rossentalschule Albstadt-Truchtelfingen</p>
							<p class="timeline-detail">Assistance for handicapped children.</p>
						</div>
					</div>
				</div>
			</section>

			<!-- Scholarships -->
			<section class="cv-section">
				<h2 class="section-title">
					<span class="section-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							><circle cx="12" cy="8" r="6" /><path
								d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"
							/></svg
						>
					</span>
					Scholarships
				</h2>
				<div class="timeline">
					<div class="timeline-item">
						<div class="timeline-meta">
							<span class="timeline-date">2022 – 2024</span>
						</div>
						<div class="timeline-content">
							<h3>Deutschland Scholarship</h3>
							<p class="timeline-org">Heidelberg University</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	</div>
</div>

<style lang="scss">
	@use '../../../lib/scss/_breakpoints' as *;

	.page-content {
		padding-top: 2rem;
		padding-bottom: 5rem;
	}

	/* ── Layout ─────────────────────────────────────── */
	.cv-layout {
		display: grid;
		grid-template-columns: 260px 1fr;
		gap: 3rem;
		align-items: start;

		@include for-tablet-portrait-down {
			grid-template-columns: 1fr;
		}
	}

	/* ── Sidebar ─────────────────────────────────────── */
	.sidebar {
		position: sticky;
		top: 2rem;

		@include for-tablet-portrait-down {
			position: static;
		}
	}

	.sidebar-card {
		background: var(--color--card-background);
		border-radius: 16px;
		box-shadow: var(--card-shadow);
		padding: 2rem 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.avatar-wrap {
		display: flex;
		justify-content: center;
	}

	.avatar {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		object-fit: cover;
		object-position: top center;
		border: 3px solid var(--color--primary);
	}

	.sidebar-name {
		font-family: var(--font--title);
		font-size: 1.25rem;
		font-weight: 700;
		line-height: 1.25;
		text-align: center;
		color: var(--color--text);
	}

	.sidebar-title {
		font-size: 0.875rem;
		color: var(--color--text-shade);
		text-align: center;
		font-weight: 500;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		margin-top: -0.75rem;
	}

	.sidebar-links {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		border-top: 1px solid rgba(var(--color--text-rgb), 0.08);
		border-bottom: 1px solid rgba(var(--color--text-rgb), 0.08);
		padding: 1rem 0;
	}

	.sidebar-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		color: var(--color--text-shade);
		text-decoration: none;
		transition: color 0.2s ease;
		word-break: break-all;

		svg {
			width: 14px;
			height: 14px;
			flex-shrink: 0;
			color: var(--color--primary);
		}

		&:hover {
			color: var(--color--primary);
		}
	}

	.sidebar-section {
		h3 {
			font-size: 0.8rem;
			font-weight: 700;
			letter-spacing: 0.1em;
			text-transform: uppercase;
			color: var(--color--text-shade);
			margin-bottom: 0.5rem;
		}
	}

	.interest-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.3rem;

		li {
			font-size: 0.9rem;
			color: var(--color--text);
			padding-left: 0.75rem;
			position: relative;

			&::before {
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				width: 4px;
				height: 4px;
				border-radius: 50%;
				background: var(--color--primary);
			}
		}
	}

	.lang-list {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	.lang-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.lang-name {
		font-size: 0.9rem;
		color: var(--color--text);
	}

	.lang-level {
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--color--primary);
		background: var(--color--primary-tint);
		padding: 0.15rem 0.5rem;
		border-radius: 10px;
	}

	/* ── Main CV content ─────────────────────────────── */
	.cv-main {
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.cv-section {
		padding: 2rem 0;
		border-bottom: 1px solid rgba(var(--color--text-rgb), 0.08);

		&:last-child {
			border-bottom: none;
		}
	}

	.section-title {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		font-family: var(--font--title);
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--color--text);
		margin-bottom: 1.5rem;
	}

	.section-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		border-radius: 8px;
		background: var(--color--primary-tint);
		flex-shrink: 0;

		svg {
			width: 16px;
			height: 16px;
			color: var(--color--primary);
		}
	}

	/* ── Timeline ────────────────────────────────────── */
	.timeline {
		display: flex;
		flex-direction: column;
		gap: 0;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			left: 140px;
			top: 8px;
			bottom: 8px;
			width: 1px;
			background: rgba(var(--color--primary-rgb), 0.2);

			@include for-phone-only {
				display: none;
			}
		}
	}

	.timeline-item {
		display: grid;
		grid-template-columns: 140px 1fr;
		gap: 1.5rem;
		padding: 1rem 0;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			left: 136px;
			top: 1.4rem;
			width: 9px;
			height: 9px;
			border-radius: 50%;
			background: var(--color--primary);
			border: 2px solid var(--color--page-background);

			@include for-phone-only {
				display: none;
			}
		}

		@include for-phone-only {
			grid-template-columns: 1fr;
			gap: 0.3rem;
		}
	}

	.timeline-meta {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.4rem;
		padding-top: 0.1rem;

		@include for-phone-only {
			flex-direction: row;
			align-items: center;
		}
	}

	.timeline-date {
		font-size: 0.825rem;
		color: var(--color--text-shade);
		white-space: nowrap;
		font-variant-numeric: tabular-nums;
		margin-right: 0.5rem;
	}

	.timeline-badge {
		font-size: 0.78rem;
		font-weight: 700;
		padding: 0.15rem 0.5rem;
		border-radius: 10px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		white-space: nowrap;
		margin-right: 0.5rem;

		&.phd {
			background: rgba(var(--color--primary-rgb), 0.12);
			color: var(--color--primary);
		}
		&.msc {
			background: rgba(var(--color--secondary-rgb), 0.12);
			color: var(--color--secondary);
		}
		&.bsc {
			background: rgba(var(--color--text-rgb), 0.07);
			color: var(--color--text-shade);
		}
		&.editor {
			background: rgba(var(--color--yellow-rgb), 0.15);
			color: #7a5f00;
		}
		&.exchange {
			background: rgba(var(--color--secondary-rgb), 0.1);
			color: var(--color--secondary);
		}
		&.intern {
			background: rgba(var(--color--primary-rgb), 0.08);
			color: var(--color--primary);
		}
		&.volunteer {
			background: rgba(var(--color--text-rgb), 0.07);
			color: var(--color--text-shade);
		}
	}

	.timeline-content {
		h3 {
			font-size: 1rem;
			font-weight: 700;
			color: var(--color--text);
			margin-bottom: 0.25rem;
		}
	}

	.timeline-org {
		font-size: 0.875rem;
		color: var(--color--primary);
		font-weight: 500;
		margin-bottom: 0.4rem;

		a {
			color: inherit;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	.timeline-detail {
		font-size: 0.875rem;
		line-height: 1.6;
		color: rgba(var(--color--text-rgb), 0.75);

		a {
			color: var(--color--primary);
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	/* ── Publications in CV ──────────────────────────── */
	.pub-entry {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		padding: 0.75rem 0;
		border-bottom: 1px solid rgba(var(--color--text-rgb), 0.06);
	}

	.pub-venue-badge {
		flex-shrink: 0;
		font-size: 0.8rem;
		font-weight: 700;
		padding: 0.25rem 0.6rem;
		border-radius: 6px;
		white-space: nowrap;
		margin-top: 0.1rem;

		&.workshop {
			background-color: rgba(var(--color--secondary-rgb), 0.12);
			color: var(--color--secondary);
			border: 1px solid rgba(var(--color--secondary-rgb), 0.3);
		}
		&.conference {
			background-color: rgba(var(--color--primary-rgb), 0.12);
			color: var(--color--primary);
			border: 1px solid rgba(var(--color--primary-rgb), 0.3);
		}
		&.preprint {
			background-color: rgba(var(--color--text-rgb), 0.07);
			color: var(--color--text-shade);
			border: 1px solid rgba(var(--color--text-rgb), 0.15);
		}
	}

	.pub-info {
		.pub-title {
			font-size: 1rem;
			font-weight: 700;
			color: var(--color--text);
			margin: 0 0 0.2rem;
		}
		.pub-authors {
			font-size: 0.875rem;
			color: var(--color--text-shade);
			margin: 0;
			font-style: italic;
		}
	}

	.all-pubs-link {
		display: inline-block;
		margin-top: 1rem;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color--primary);
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
</style>
