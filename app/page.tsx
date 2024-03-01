'use client'
import Image from 'next/image'
import Illustration from '../assets/images/illustration-sign-up-desktop.svg'
import IllustrationMobile from '../assets/images/illustration-sign-up-mobile.svg'
import Check from '../assets/images/icon-success.svg'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import { InputError } from '@/components/ui/inputError'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
	const [email, setEmail] = useState('')
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)

	const submit = (e: any) => {
		e.preventDefault

		const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
		if (!emailRegex.test(email)) {
			setError(true)
		} else {
			setSuccess(true)
			setError(false)
		}
	}
	return (
		<main className="sm:bg-cg h-screen flex flex-col gap-4 justify-center items-center">
			{success === true ? (
				<Card className="w-96 h-screen sm:h-auto p-4 flex flex-col justify-between items-center sm:flex-none sm:flex-col sm:justify-start sm:items-start">
					<div className="mt-28 sm:mt-0">
						<CardHeader>
							<CardTitle>
								<Image src={Check} width={50} height={50} alt="check" />
							</CardTitle>
							<CardDescription className="text-4xl text-cg font-bold">Thanks for subscribing!</CardDescription>
						</CardHeader>
						<CardContent className="text-md sm:text-sm">
							A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.
						</CardContent>
					</div>
					<CardContent className="w-full">
						<Button
							className="w-full sm:w-full"
							onClick={() => {
								setSuccess(false)
								setEmail('')
							}}
						>
							Dismiss message
						</Button>
						<p className="text-black  sm:hidden">
							Challenge by{' '}
							<Link href="https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv" target="_blank" className="underline font-bold">
								Frontend Mentor
							</Link>
							. Coded by{' '}
							<Link href="https://www.frontendmentor.io/profile/idkwattuput" target="_blank" className="underline font-bold">
								idkwattuput
							</Link>
							.
						</p>
					</CardContent>
				</Card>
			) : (
				<Card className="flex flex-col sm:flex-row sm:p-4 h-full sm:h-auto">
					<Image src={IllustrationMobile} width={500} height={500} alt="Picture" priority={true} className="sm:hidden" />
					<div className="sm:p-4">
						<CardHeader>
							<CardTitle className="text-5xl font-bold">Stay updated!</CardTitle>
							<CardDescription>Join 60,000+ product managers receiving monthly updates on:</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col gap-8 sm:gap-2">
							<div className="flex gap-4">
								<Image src={Check} width={20} height={20} alt="Picture" />
								<p className="text-sm">Product discovery and building what matters</p>
							</div>
							<div className="flex gap-4">
								<Image src={Check} width={20} height={20} alt="Picture" />
								<p className="text-sm">Measuring to ensure updates are a success</p>
							</div>
							<div className="flex gap-4">
								<Image src={Check} width={20} height={20} alt="Picture" />
								<p className="text-sm">And much more!</p>
							</div>
						</CardContent>
						{error === false ? (
							<CardContent>
								<Label className="text-xs font-medium">Email address</Label>
								<Input type="email" placeholder="email@company.com" className="focus:border-cg" onChange={(e: any) => setEmail(e.target.value)} />
							</CardContent>
						) : (
							<CardContent>
								<div className="flex justify-between items-center">
									<Label className="text-xs font-medium">Email address</Label>
									<Label className="text-xs text-red-600 font-medium">Valid Email Required</Label>
								</div>
								<InputError type="email" placeholder="email@company.com" className="focus:border-cg" onChange={(e: any) => setEmail(e.target.value)} />
							</CardContent>
						)}
						<CardContent>
							<Button onClick={submit} className="w-full">
								Subscribe to monthly newsletter
							</Button>
						</CardContent>
						<p className="text-black  sm:hidden p-6">
							Challenge by{' '}
							<Link href="https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv" target="_blank" className="underline font-bold">
								Frontend Mentor
							</Link>
							. Coded by{' '}
							<Link href="https://www.frontendmentor.io/profile/idkwattuput" target="_blank" className="underline font-bold">
								idkwattuput
							</Link>
							.
						</p>
					</div>
					<Image src={Illustration} width={300} height={300} alt="Picture" priority={true} className="hidden sm:block" />
				</Card>
			)}
			<p className="sm:text-white hidden sm:block">
				Challenge by{' '}
				<Link href="https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv" target="_blank" className="underline font-bold">
					Frontend Mentor
				</Link>
				. Coded by{' '}
				<Link href="https://www.frontendmentor.io/profile/idkwattuput" target="_blank" className="underline font-bold">
					idkwattuput
				</Link>
				.
			</p>
		</main>
	)
}
