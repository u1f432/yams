<script lang="ts">
    import { Avatar } from "@skeletonlabs/skeleton";
</script>

<div class="flex flex-col md:flex-row w-full justify-center gap-2">
    <div class="flex flex-row md:flex-col gap-2">
        <Avatar class="w-12 -ml-2 md:-ml-0" />
        <div class="ml-1 md:hidden flex justify-center flex-col">
            <strong class="text-lg">Username</strong>
        </div>
    </div>
    <div class="max-w-[640px] -ml-2 md:-ml-0 flex-1">
        <strong class="text-lg ml-1 hidden md:inline-block">Username</strong>
        <div class="card p-4 mx-auto w-full rounded-tl-none md:mt-2 flex flex-col">
            <section>
                <label class="label">
                    <textarea class="textarea p-3 resize-none" rows="5" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
                </label>
            </section>
            <button class="btn bg-primary-600 mt-3 text-white ml-auto">Send</button>
        </div>
    </div>
</div>