<script>
	import Image from '../atoms/Image.svelte';
	import Waves from './Waves.svelte';
	import SocialsWithText from '../molecules/SocialsWithText.svelte';
</script>

<section id="hero">
	<div id="hero-content" class="container">
		<div id="hero-text">
			<h1 class="hello">Hi, I'm <span class="hello-secondary">Johannes Gabriel!</span></h1>
			<div class="intro">
				<div class="intro-container">
					<span class="left">PhD Student @ ITU Copenhagen</span>
				</div>
				<div class="intro-container">
					<span class="right">Editor @ MTB-News.de</span>
				</div>
				<div class="intro-socials">
					<SocialsWithText />
				</div>
			</div>
		</div>
		<div class="hero-image" style="overflow: hidden;">
			<Image src="/images/portrait_itu.png" alt="Johannes Gabriel Sindlinger" />
		</div>
	</div>

	<div id="wave-background" />
	<Waves />
</section>

<section id="hero-subsection" class="container">
	<div class="intro">
		<p class="intro-text">
			I'm a PhD student in <a href="https://nlpnorth.github.io"><strong>NLPnorth Lab</strong></a> at
			the <a href="https://www.itu.dk"><strong>IT University of Copenhagen</strong></a> under the
			supervision of <a href="https://annargrs.github.io"><strong>Anna Rogers</strong></a>. I am
			working on topics related to <strong>Data Attribution</strong> on
			<strong>Large Language Models</strong>
			and its application towards the domain of <strong>copyright</strong> &
			<strong>AI safety</strong>.
		</p>
		<p class="intro-text">
			Additionally, since 2016, I'm an editor for <a href="https://www.mtb-news.de"
				><strong>MTB-News.de</strong></a
			>
			— the largest German-language mountain biking platform — where I cover news, events, and innovations
			in the MTB world.
		</p>
	</div>
</section>

<style lang="scss">
	@use '../../scss/_breakpoints' as *;

	.intro-socials {
		padding-top: 1rem;
	}

	@include for-phone-only {
		.intro-socials {
			display: none;
		}
	}

	#wave-background {
		width: 100%;
		height: 20vh;
		max-height: 100px;
		min-height: 100px;
	}

	.hero-image {
		padding-top: 2.7rem;
		max-width: 350px;
		width: 40%;
		max-height: 350px;
		object-fit: object-fit;
		mask-image: radial-gradient(ellipse 80% 100% at 50% 50%, black 40%, transparent 100%);
		-webkit-mask-image: radial-gradient(ellipse 80% 100% at 50% 50%, black 40%, transparent 100%);
		transform: scale(1.5);

		@include for-phone-only {
			width: 80%;
			padding-top: 1rem;
			transform: scale(2.3);
			max-width: 160px;
		}
	}

	#hero {
		position: relative;
		padding-top: 90px;
		background: linear-gradient(60deg, var(--color--waves-start) 0%, var(--color--waves-end) 100%);
	}

	@include for-tablet-portrait-up {
		#hero-text {
			margin-top: 1rem;
		}
	}

	#hero-content {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 15px;
		position: relative;

		@include for-phone-only {
			padding-top: 2rem;
			padding-left: 1.3rem;
		}

		.hello {
			text-align: left;
			width: 110%;
			@include for-phone-only {
				width: 90%;
			}
		}

		.hello-secondary {
			color: var(--color--secondary);
		}

		.intro {
			font-weight: 500;
			font-size: 1.6rem;
			width: 105%;
			display: flex;
			flex-direction: column;
			padding-top: 1rem;

			@include for-phone-only {
				width: 90%;
				font-size: 1.3rem;
			}

			.left {
				text-align: left;
			}
			.right {
				text-align: right;
				@include for-phone-only {
					display: none;
				}
			}
		}

		.intro-container {
			width: 100%;
			display: flex;
			height: 100%;
			padding-bottom: 0.5rem;

			&:has(.left) {
				justify-content: flex-start;
			}

			&:has(.right) {
				justify-content: flex-end;

				@include for-phone-only {
					justify-content: flex-start;
				}
			}
		}
	}

	#hero-subsection {
		padding-top: 1rem;
		display: flex;
		flex-direction: column;

		.intro-text {
			line-height: 1.6;
			max-width: 800px;
			margin: 0 auto;
			font-size: 1.1rem;
			margin-bottom: 1rem;

			@include for-phone-only {
				font-size: 1rem;
			}
		}
	}
</style>
